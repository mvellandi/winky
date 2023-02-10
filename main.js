(function (storyContent) {
  // Create ink story from the content using inkjs
  let story = new inkjs.Story(storyContent);
  let savePoint = "";

  let savedTheme;
  let globalTagTheme;

  // DISABLED, UNUSED
  // Global tags - those at the top of the ink file
  // We support:
  //  # theme: light
  //  # theme: dark
  //  # author: Your Name
  // if (story.globalTags) {
  //   story.globalTags.forEach((tag) => {
  //     let splitTag = splitPropertyTag(tag);

  //     Set initial theme, regardless of user's device light/dark mode setting
  //     if (splitTag && splitTag.property == "theme") {
  //       globalTagTheme = splitTag.val;
  //     }

  //     Set author name via Inky tag
  //     else if (splitTag && splitTag.property == "author") {
  //       document.querySelector("#story header .author").innerHTML =
  //         "by " + splitTag.val;
  //     }
  //   });
  // }

  let storyContainer = document.querySelector("#story");
  let rootContainer = document.querySelector("#root");

  // page features setup
  setupTheme(globalTagTheme);
  let hasSave = loadSavePoint();
  setupButtons(hasSave);

  // Set initial save point
  savePoint = story.state.toJson();

  // Kick off the start of the story!
  continueStory(true);

  // Main story processing function. Each time this is called it generates
  // all the next content up as far as the next set of choices.
  function continueStory(firstTime) {
    let paragraphIndex = 0;
    let delay = 0.0;

    // Don't over-scroll past new content
    let previousBottomEdge = firstTime ? 0 : contentBottomEdgeY();

    // Generate story text - loop through available content
    while (story.canContinue) {
      // Get ink to generate the next paragraph
      let paragraphText = story.Continue();
      let tags = story.currentTags;

      // Any special tags included with this line
      let customClasses = [];
      for (let i = 0, n = tags.length; i < n; i++) {
        let tag = tags[i];

        // Detect tags of the form "X: Y". Currently used for IMAGE and CLASS but could be
        // customized to be used for other things too.
        let splitTag = splitPropertyTag(tag);

        // Any audio needs to be investigated regarding best practices for autoplay
        // AUDIO: src
        if (splitTag && splitTag.property == "AUDIO") {
          if ("audio" in this) {
            this.audio.pause();
            this.audio.removeAttribute("src");
            this.audio.load();
          }
          this.audio = new Audio(splitTag.val);
          this.audio.play();
        }

        // AUDIOLOOP: src
        else if (splitTag && splitTag.property == "AUDIOLOOP") {
          if ("audioLoop" in this) {
            this.audioLoop.pause();
            this.audioLoop.removeAttribute("src");
            this.audioLoop.load();
          }
          this.audioLoop = new Audio(splitTag.val);
          this.audioLoop.play();
          this.audioLoop.loop = true;
        }

        // IMAGE: src
        if (splitTag && splitTag.property == "IMAGE") {
          let imageElement = document.createElement("img");
          // Here we can add image attributes and values with an ampersand (&) separated string
          // which we'd then split and add to the image element
          // For now, only src and class are supported
          // src is automatically inferred as the first attribute
          //   ex: IMAGE: src&class
          //   ex: IMAGE: src&class=class1,class2

          // Test if the image has attributes, if so, split them and add them to the image element
          if (splitTag.val.includes("&")) {
            let attrs = splitTag.val.split("&");
            imageElement.src = attrs.shift();
            attrs.forEach((attr) => {
              let [a, v] = attr.split("=");
              if (a == "class") {
                //   check if there are multiple classes
                if (v.includes(",")) {
                  v.split(",").forEach((c) => {
                    imageElement.classList.add(c);
                  });
                } else {
                  // only single class found
                  imageElement.classList.add(v);
                }
                // no other attributes supported yet, so continue
              }
            });
          } else {
            // only src attribute found
            imageElement.src = splitTag.val;
          }
          storyContainer.appendChild(imageElement);

          showAfter(delay, imageElement);
          delay += 200.0;
        }

        // LINK: url (opens on same domain)
        else if (splitTag && splitTag.property == "LINK") {
          window.location.href = splitTag.val;
        }

        // Doesn't work
        // LINKOPEN: url
        // else if (splitTag && splitTag.property == "LINKOPEN") {
        //   window.open(splitTag.val);
        // }

        // BACKGROUND: src
        else if (splitTag && splitTag.property == "BACKGROUND") {
          rootContainer.style.backgroundImage = `url("${splitTag.val}")`;
        }

        // CLASS: className
        else if (splitTag && splitTag.property == "CLASS") {
          customClasses.push(splitTag.val);
        }

        // CLEAR - removes all existing content.
        // RESTART - clears everything and restarts the story from the beginning
        else if (tag == "CLEAR" || tag == "RESTART") {
          removeAll("p");
          removeAll("img");

          // Comment out this line if you want to leave the header visible when clearing
          // setVisible(".header", false);

          if (tag == "RESTART") {
            restart();
            return;
          }
        }
      }

      // Create paragraph element (initially hidden)
      let paragraphElement = document.createElement("p");
      paragraphElement.innerHTML = paragraphText;
      storyContainer.appendChild(paragraphElement);

      // Add any custom classes derived from ink tags
      customClasses.forEach((customClass) => {
        paragraphElement.classList.add(customClass);
      });

      // Fade in paragraph after a short delay
      showAfter(delay, paragraphElement);
      delay += 200.0;
    }

    // Create HTML choices from ink choices
    story.currentChoices.forEach((choice) => {
      // Create paragraph with anchor element
      let choiceParagraphElement = document.createElement("p");
      choiceParagraphElement.classList.add("choice");
      if (choice.text.includes("&class=")) {
        let [text, customClasses] = choice.text.split("&class=");
        customClasses = customClasses.split(",");
        choiceParagraphElement.innerHTML = `<a href='#'>${text}</a>`;
        // Add any custom classes derived from ink tags
        customClasses.forEach((customClass) => {
          choiceParagraphElement.classList.add(customClass);
        });
      } else {
        choiceParagraphElement.innerHTML = `<a href='#'>${choice.text}</a>`;
      }
      storyContainer.appendChild(choiceParagraphElement);

      // Fade choice in after a short delay
      showAfter(delay, choiceParagraphElement);
      delay += 200.0;

      // Click on choice
      let choiceAnchorEl = choiceParagraphElement.querySelectorAll("a")[0];
      choiceAnchorEl.addEventListener("click", function (event) {
        // Don't follow <a> link
        event.preventDefault();

        // Remove all existing choices
        removeAll(".choice");

        // Tell the story where to go next
        story.ChooseChoiceIndex(choice.index);

        // This is where the save button will save from
        savePoint = story.state.toJson();

        // Action
        continueStory();
      });
    });

    // Extend height to fit
    // We do this manually so that removing elements and creating new ones doesn't
    // cause the height (and therefore scroll) to jump backwards temporarily.
    storyContainer.style.height = contentBottomEdgeY() + "px";

    if (!firstTime) scrollDown(previousBottomEdge);

    // Now after finished loading data and story container size, we can show it
    storyContainer.style.visibility = "visible";
  }

  function restart() {
    story.ResetState();

    // Comment out this line if you want to leave the header visible when restarting a game
    // setVisible("#story header", true);

    // set save point to here
    savePoint = story.state.toJson();

    continueStory(true);

    rootContainer.scrollTo(0, 0);
  }

  // -----------------------------------
  // Various Helper functions
  // -----------------------------------

  // Fades in an element after a specified delay
  function showAfter(delay, el) {
    el.classList.add("hide");
    setTimeout(function () {
      el.classList.remove("hide");
    }, delay);
  }

  // Scrolls the page down, but no further than the bottom edge of what you could
  // see previously, so it doesn't go too far.
  function scrollDown(previousBottomEdge) {
    // Line up top of screen with the bottom of where the previous content ended
    let target = previousBottomEdge;

    // Can't go further than the very bottom of the page
    let limit = rootContainer.scrollHeight - rootContainer.clientHeight;
    if (target > limit) target = limit;

    let start = rootContainer.scrollTop;

    let dist = target - start;
    let duration = 300 + (300 * dist) / 100;
    let startTime = null;
    function step(time) {
      if (startTime == null) startTime = time;
      let t = (time - startTime) / duration;
      let lerp = 3 * t * t - 2 * t * t * t; // ease in/out
      rootContainer.scrollTo(0, (1.0 - lerp) * start + lerp * target);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // The Y coordinate of the bottom end of all the story content, used
  // for growing the container, and deciding how far to scroll.
  function contentBottomEdgeY() {
    let bottomElement = storyContainer.lastElementChild;
    return bottomElement
      ? bottomElement.offsetTop + bottomElement.offsetHeight
      : 0;
  }

  // Remove all elements that match the given selector. Used for removing choices after
  // you've picked one, as well as for the CLEAR and RESTART tags.
  function removeAll(selector) {
    storyContainer.querySelectorAll(selector).forEach((el) => {
      el.parentNode.removeChild(el);
    });
  }

  // UNUSED
  // function setVisible(selector, visible) {
  //   storyContainer.querySelectorAll(selector).forEach((el) => {
  //     if (!visible) el.classList.add("invisible");
  //     else el.classList.remove("invisible");
  //   });
  // }

  // Helper for parsing out tags of the form:
  //  # PROPERTY: value
  // e.g. IMAGE: source path
  function splitPropertyTag(tag) {
    let propertySplitIdx = tag.indexOf(":");
    if (propertySplitIdx == null) return null;
    else
      return {
        property: tag.substr(0, propertySplitIdx).trim(),
        val: tag.substr(propertySplitIdx + 1).trim(),
      };
  }

  // Loads save state if exists in the browser memory
  function loadSavePoint() {
    try {
      let savedState = window.localStorage.getItem("save-state");
      if (savedState) {
        story.state.LoadJson(savedState);
        return true;
      }
    } catch (e) {
      console.debug("Couldn't load saved story location");
    }
    return false;
  }

  // Detects which theme (light or dark) to use
  function setupTheme(globalTagTheme) {
    // load theme from browser memory
    let savedTheme;
    try {
      savedTheme = window.localStorage.getItem("theme");
    } catch (e) {
      console.debug("Couldn't load saved theme");
    }

    // Check whether the OS/browser is configured for dark mode
    let browserDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (
      savedTheme === "dark" ||
      (savedTheme == undefined && globalTagTheme === "dark") ||
      (savedTheme == undefined && globalTagTheme == undefined && browserDark)
    )
      document.body.classList.add("dark");
  }

  // Used to hook up the functionality for global functionality buttons
  function setupButtons(hasSave) {
    let restartEl = document.getElementById("restart");
    if (restartEl)
      restartEl.addEventListener("click", function (event) {
        removeAll("#story p");
        removeAll("#story img");
        // setVisible("#story header", false);
        restart();
      });

    let saveEl = document.getElementById("save");
    if (saveEl)
      saveEl.addEventListener("click", function (event) {
        try {
          window.localStorage.setItem("save-state", savePoint);
          document.getElementById("reload").removeAttribute("disabled");
          window.localStorage.setItem(
            "theme",
            document.body.classList.contains("dark") ? "dark" : ""
          );
        } catch (e) {
          console.warn("Couldn't save state");
        }
      });

    let reloadEl = document.getElementById("reload");
    if (!hasSave) {
      reloadEl.setAttribute("disabled", "disabled");
    }
    reloadEl.addEventListener("click", function (event) {
      if (reloadEl.getAttribute("disabled")) return;

      removeAll("p");
      removeAll("img");
      try {
        let savedState = window.localStorage.getItem("save-state");
        if (savedState) story.state.LoadJson(savedState);
      } catch (e) {
        console.debug("Couldn't load save state");
      }
      continueStory(true);
    });

    let themeSwitchEl = document.getElementById("theme-switch");
    if (themeSwitchEl)
      themeSwitchEl.addEventListener("click", function (event) {
        document.body.classList.add("switched");
        document.body.classList.toggle("dark");
      });
  }
})(storyContent);
