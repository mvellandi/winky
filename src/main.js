(function (storyContent) {
  // Create ink story from the content using inkjs
  let story = new inkjs.Story(storyContent);
  let savePoint = "";

  const rootStyle = getComputedStyle(document.querySelector(":root"));
  const darkTheme = rootStyle.getPropertyValue("--dark");
  const lightTheme = rootStyle.getPropertyValue("--light");
  const storyFadeInMs =
    Number(rootStyle.getPropertyValue("--story-fade-in-ms")) || 600;
  const metaThemeColor = document.querySelector("meta[name=theme-color]");

  let globalTagTheme;

  let storyContainer = document.querySelector("#story");

  // page features setup
  setupTheme(globalTagTheme);
  let hasSave = loadSavePoint();
  setupButtons(hasSave);

  // Set initial save point
  savePoint = story.state.toJson();

  // Kick off the start of the story!
  continueStory();

  // STORY PAGE GENERATOR
  function continueStory() {
    // BUILD IMAGES, PARAGRAPHS, AND HANDLE TAGS
    // This iterates through the story content data structure.
    // Each iteration has one text paragraph and various tags.
    // Tags are first processed, which perform various actions.
    // Last, the paragraph is added to the page along with any 'CLASS' tags.
    // console.log("CONTINUE STORY: start");
    while (story.canContinue) {
      // console.log("generating story content");
      // Get ink to generate the next paragraph
      let paragraphText = story.Continue();
      let tags = story.currentTags;

      // Any special tags included with this line
      let paragraphClasses = [];
      for (let i = 0, n = tags.length; i < n; i++) {
        let tag = tags[i];

        // Detect tags of the form "X: Y". Currently used for IMAGE and CLASS but could be
        // customized to be used for other things too.
        let splitTag = splitPropertyTag(tag);

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
          continue;
        }

        // CLASS: className for paragraphs
        if (splitTag && splitTag.property == "CLASS") {
          paragraphClasses.push(splitTag.val);
          continue;
        }

        // CLEAR - removes all existing content.
        if (tag == "CLEAR") {
          clearStoryContent();
        }

        // RESTART - clears everything and restarts the story from the beginning
        if (tag == "RESTART") {
          // console.log("Restart tag found, restarting story");
          restart();
          // IMPORTANT: We need to exit continueStory(), because the story has been restarted.
          return;
        }
      }

      // CREATE PARAGRAPH
      let paragraphElement = document.createElement("p");
      paragraphElement.innerHTML = paragraphText;
      storyContainer.appendChild(paragraphElement);

      // ADD CLASSES TO PARAGRAPH
      paragraphClasses.forEach((customClass) => {
        paragraphElement.classList.add(customClass);
      });
    }

    // console.log("finished story content generation, initializing choices");

    // CREATE CHOICES
    // console.log(story.currentChoices);
    story.currentChoices.forEach((choice) => {
      // Create paragraph with anchor element
      let choiceParagraphElement = document.createElement("p");
      choiceParagraphElement.classList.add("choice");

      // Check if the choice has any custom classes
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

      // CHOICE ACTION
      let choiceAnchorEl = choiceParagraphElement.querySelectorAll("a")[0];
      choiceAnchorEl.addEventListener("click", function (event) {
        // console.log("* action taken");
        // Don't follow <a> link
        event.preventDefault();

        clearStoryContent();

        // Tell the story where to go next
        story.ChooseChoiceIndex(choice.index);

        // This is where the save button will save from
        savePoint = story.state.toJson();

        // Clear and continue the story
        // clearStoryContent();
        continueStory();
      });
    });

    // END STORY PAGE INITIALIZATION
    // SCROLL TO TOP AND FADE IN
    window.scrollTo(0, 0);
    // console.log("story page ready, fading in");
    fadeIn(storyContainer, storyFadeInMs);
    // console.log("CONTINUE STORY: end");
  }

  // -----------------------------------
  // HELPER FUNCTIONS
  // -----------------------------------

  function restart() {
    // console.log("RESTART: restarting");
    story.ResetState();
    savePoint = story.state.toJson();
    clearStoryContent();
    // console.log("RESTART: story content cleared, continuing story");
    continueStory();
  }

  function clearStoryContent() {
    storyContainer.innerHTML = "";
  }

  // PARSE STORY TAGS
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

  // LOAD STORY SAVE POINT
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

  // THEME SETUP
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
    ) {
      document.body.classList.add("dark");
    }
  }

  // STORY CONTROLS
  function setupButtons(hasSave) {
    let restartEl = document.getElementById("restart");
    if (restartEl)
      restartEl.addEventListener("click", function (event) {
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

      clearStoryContent();

      try {
        let savedState = window.localStorage.getItem("save-state");
        if (savedState) story.state.LoadJson(savedState);
      } catch (e) {
        console.debug("Couldn't load save state");
      }
      continueStory();
    });

    let themeSwitchEl = document.getElementById("theme-switch");
    if (themeSwitchEl)
      themeSwitchEl.addEventListener("click", function (event) {
        if (document.body.classList.contains("dark")) {
          metaThemeColor.setAttribute("content", lightTheme);
        } else {
          metaThemeColor.setAttribute("content", darkTheme);
        }

        document.body.classList.add("switched");
        document.body.classList.toggle("dark");
      });
  }

  // -----------------------------------
  // FADE IN / OUT
  // -----------------------------------

  /**
   * @returns {Object}
   */
  function defaultFadeConfig() {
    return {
      easing: "linear",
      iterations: 1,
      direction: "normal",
      fill: "forwards",
      delay: 0,
      endDelay: 0,
    };
  }

  /**
   * @param {HTMLElement} el
   * @param {number} durationInMs
   * @param {Object} config
   * @returns {Promise}
   */
  async function fadeOut(el, durationInMs, config = defaultFadeConfig()) {
    return new Promise((resolve, reject) => {
      const animation = el.animate(
        [
          { opacity: "1" },
          { opacity: "0", offset: 0.5 },
          { opacity: "0", offset: 1 },
        ],
        { duration: durationInMs, ...config }
      );
      animation.onfinish = () => resolve();
    });
  }

  /**
   * @param {HTMLElement} el
   * @param {number} durationInMs
   * @param {Object} config
   * @returns {Promise}
   */
  async function fadeIn(el, durationInMs, config = defaultFadeConfig()) {
    return new Promise((resolve) => {
      const animation = el.animate(
        [
          { opacity: "0" },
          { opacity: "0.5", offset: 0.5 },
          { opacity: "1", offset: 1 },
        ],
        { duration: durationInMs, ...config }
      );
      animation.onfinish = () => resolve();
    });
  }
})(storyContent);
