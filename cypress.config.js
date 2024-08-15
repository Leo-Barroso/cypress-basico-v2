const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  scripts: {
    "cy:open": "cypress open --config-file=cypress.config.js",
  }
});
