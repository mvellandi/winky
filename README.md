# Winky

## Summary

Publish your own interactive stories! This web template is for use with the [Ink scripting language and editor](https://www.inklestudios.com/ink/).  
Example here: [https://winky.vellandi.net](https://winky.vellandi.net)

## License

This template was made by Mario Vellandi for the author Geoffrey Golden and his publication: [Adventure Snack](https://www.adventuresnack.com/).
While this template is free to use, the story in the file 'story.js' and the images used are copyrighted by Geoffrey Golden and Adventure Snack.
To make your own story, you can use this template as a base, but you must use a new story file and preferably your own fonts and images.

## Quick Start

1. [Download and install the Inky Editor](https://github.com/inkle/inky/releases)
2. [Learn how to write a story in Inky](https://www.inklestudios.com/ink/web-tutorial/)
3. Write a story in the Inky Editor and export it as a .js file
4. Replace 'story.js' with your own story file
5. Remove the images in the folder 'img' and replace them with your own (if applicable)
6. Edit 'index.html' to change the \<title> and \<h1> content
7. Use your own self-hosted or Google Fonts via '/assets/fonts.css', and edit '/styles/variables.css' to change the font variables
8. Remove/Modify the CNAME file for your own custom domain
9. Open 'index.html' in a browser and enjoy your story!
10. Host your story on GitHub Pages.

## Styling Images and Choices

Using the Inky Editor, you can add CSS classes to images and choices using the following format:

'# IMAGE: src&class=class1,class2,etc...'  
'# IMAGE: img/mustang.jpg&class=block'

'Choice text &class=class1,class2,etc...'  
'Enter the Graveyard &class=strike'
