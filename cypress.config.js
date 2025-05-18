const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'https://www.superprof.com.ar'
      // implement node event listeners here
    },
    
  },
});
