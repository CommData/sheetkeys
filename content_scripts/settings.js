Settings = {
  // Returns a nested map of mode => key => commandName.
  parseKeyMappings(configText) {
    var lines = configText.trim().split("\n");
    var keyMappings = {};
    for (let line of lines) {
      line = line.trim();
      if (line == "") { continue; } // Ignore blank lines.
      const [mapCommand, key, commandName] = line.split(/\s+/);

      // TODO(philc): Support keybindings in modes other than normal.
      // TODO(philc): return validation errors.
      if (!keyMappings["normal"]) { keyMappings["normal"] = {} ; }
      keyMappings["normal"][key] = commandName;
    }
    return keyMappings;
  },

  async get() {
    const settings = await chrome.storage.sync.get("options-v1");
    return settings["options-v1"] || {};
  },

  async set(settings) {
    chrome.storage.sync.set({"options-v1": settings});
  },

  async loadUserKeyMappings() {
    const settings = await Settings.get();
    let userMappings = settings.keyMappings ? Settings.parseKeyMappings(settings.keyMappings) : {};
    let mappings = {};
    // Perform a deep merge with the default key mappings.
    for (let mode in Commands.defaultMappings) {
      mappings[mode] = clone(Commands.defaultMappings[mode]);
      Object.assign(mappings[mode], userMappings[mode]);
    }
    return mappings;
  }

};
