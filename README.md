# rugby-hunter

This is a chrome extension to enable looking through youtube search results without discovering the score of matches played.

To do this it hides all available thumbnails, as they often contain scores in the image. It also performs a word search removing blacklisted words.

## Installation

1. Click the green `code` button above and select `Download ZIP`.
2. After you have the available file downloaded, you should unzip/extract it into a folder on your machine (will probably get called `rugby-hunter-main`).

You will see that this folder now contains all the required files to install as a Chrome Extension:

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

3. Now open your chrome browser and enter [chrome://extensions/](chrome://extensions/) in the url bar and press enter.
4. Turn on developer mode (top right)
5. Now click the `Load unpacked` button in the top left corner and select the folder where all of the above files where saved.
6. The extension is now installed and you can find it by clicking the little puzzle icon, top right in chrome. If you want it always visible you can  `pin` the rugby-hunter extension, or continue to access it through this puzzle icon.



## Usage

1. Click the score-card icon (top right in chrome, if you pinned it). Otherwise puzzle icon (top right) and select rugby-hunter in the menu.  This will in turn show a popup button that you can click to enable (will turn green).

2. Now visit [www.youtube.com](https://www.youtube.com/) and you will get a subset of youtube search results / views. ( If you tube is already open you may need to refresh to see pink blocks )

3. Search for the game you are after: i.e. `South Africa vs England` and you will be shown the results with pink blocks and redacted text.

Word of warning!! you may get a flash of the original site before the extension scrubs the page... LOOK AWAY!!!

If you cannot see pink blocks, its not working!!! try refreshing the page (press f5)

Finding the correct video to watch has become a little trickier now as the wording is redacted, however I have ensured that the video duration stays visible in the pink block.

So look for match length videos. Good Luck!!!



## Updating the redacted words list

In `content.js` you will find a long list of comma seperated words that the extension uses to redact. (blacklistedTerms)

You can edit this list, just ensuring you keep them single quoted and comma seperated.

After which visit [chrome://extensions/](chrome://extensions/) again in Chrome and find the extension and click the refresh button ( ⟳ ), followed by refreshing/restarting the browser.

The list will now be updated.. I am sure there are many I have missed, but a good start..
