Sheetkeys is a Chrome extension which adds powerful keyboard navigation shortcuts to Google Sheets, in the
spirit of the Vim text editor. It's written by one of the authors of
[Vimium](https://github.com/philc/vimium).

## Keyboard Mappings

Documentation for these shortcuts is Coming Soon. For now, you can see all of the bindings provided by looking
in the [source](https://github.com/philc/sheetkeys/blob/master/content_scripts/commands.js#L88).

**Other UI improvements**

* In Google Sheets, when editing a cell, typing ESC erases all of the changes you've made, and your changes
  can't be brought back with "Undo". Sheetkeys fixes this. Now ESC will save your changes to the cell, and you
  can revert them by using Undo.
* `Ctrl-e` on Mac OS X is a handy system-wide shortcut which moves the cursor to the end of the form field
  you're currently editing. This essential shortcut doesn't work in stock Google Sheets. With Sheetkeys, it
  now does.

## Install

**Installing from the Chrome Web Store:**

Coming soon!

**Installing from source:**

1. Check out this repository
2. Navigate to `chrome://extensions` in Chrome
3. Toggle into Developer Mode
4. Click on "Load Unpacked Extension..."
5. Select the Sheetkeys folder

## Usage tips

* If you're using [Vimium](https://github.com/philc/vimium), consider disabling it for
  `https?://docs.google.com/spreadsheets/*` so that the Google sheets page receives the keyboard focus when it
  first loads. Otherwise you'll need to click on the sheet before the SheetKeys hotkeys take effect.

## Developer workflow

* You can use the
  [Extension Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid)
  which provides a quick shortcut for reloading all of your locally-developed extensions. See
  [here](http://stackoverflow.com/a/12767200/46237) for further info.
* Refresh your Google Sheets page after reloading the Sheetkeys extension in Chrome.
