# rugby-hunter

This is a chrome extension to enable looking through youtube search results without discovering the score of matches played.

To do this it hides all available thumbnails, as they often contain scores in the image. It also performs a word search removing blacklisted words.

## Installation

Click the green `code` button and select `Download ZIP`. After you have the available file you should unzip it into a folder on your machine.

You will see that this folder now contains the required files to install as a Chrome Extension:

```
background.js
content.js
icon.png
icon128.png
LICENSE
manifest.json
popup.html
popup.js
README.md
style.css
```

Now open your chrome browser and visit [chrome://extensions/](chrome://extensions/)

Here you should click the `Load unpacked` button in the top left corner and select the folder where all of the above files live.

This will then have installed everything you need.

(p.s. you may have to click the little puzzle icon top right in chrome and `pin` the rugby-hunter icon to see it)   
  
## Usage

Before visiting [www.youtube.com](https://www.youtube.com/) I would recommend clicking the little score-card icon that now exists within chrome as an extension. (top right of browser)

This will in turn show a popup button that you can click to enable (will turn green).

With this enabled you will now get a subset of youtube search results / views.

So search for the game you after: i.e. `South Africa vs England` and you will be shown the results with pink blocks and redacted text.

Word of warning!! you may get a flash of the original site before the extension scrubs the page... LOOK AWAY!!!

If you cannot see pink blocks, its not working!!! try refreshing the page (press f5)

Finding the correct video to watch has become a little trickier now as the wording is redacted, however I have ensured that the video duration stays visible in the pink block.

So look for match length videos. Good Luck!!!

  

  
## Updating the redacted words list

In `content.js` you will find a long list of comma seperated words that the extension uses to redact. (blacklistedTerms)

You can edit this list, just ensuring you keep them single quoted and comma seperated.

After which visit [chrome://extensions/](chrome://extensions/) again in Chrome and find the extension and click the refresh button ( ⟳ ), followed by refreshing/restarting the browser.

The list will now be updated.. I am sure there are many I have missed, but a good start..
