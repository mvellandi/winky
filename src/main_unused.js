// (function (storyContent) {
// ...snip...
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
// ...snip...
// continueStory(true);
// function continueStory(firstTime = false) {
// ...snip...
// while (story.canContinue) {
// for (let i = 0, n = tags.length; i < n; i++) {
// ...snip...
// UNUSED GLOBAL STORY TAGS
// Any audio needs to be investigated regarding best practices for autoplay
// AUDIO: src
// if (splitTag && splitTag.property == "AUDIO") {
//   if ("audio" in this) {
//     this.audio.pause();
//     this.audio.removeAttribute("src");
//     this.audio.load();
//   }
//   this.audio = new Audio(splitTag.val);
//   this.audio.play();
// }

// AUDIOLOOP: src
// else if (splitTag && splitTag.property == "AUDIOLOOP") {
//   if ("audioLoop" in this) {
//     this.audioLoop.pause();
//     this.audioLoop.removeAttribute("src");
//     this.audioLoop.load();
//   }
//   this.audioLoop = new Audio(splitTag.val);
//   this.audioLoop.play();
//   this.audioLoop.loop = true;
// }

// LINK: url (opens on same domain)
// else if (splitTag && splitTag.property == "LINK") {
//   window.location.href = splitTag.val;
// }

// Doesn't work
// LINKOPEN: url
// else if (splitTag && splitTag.property == "LINKOPEN") {
//   window.open(splitTag.val);
// }

// BACKGROUND: src
// else if (splitTag && splitTag.property == "BACKGROUND") {
//   rootContainer.style.backgroundImage = `url("${splitTag.val}")`;
// }

// })(storyContent);
