const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  projectId: "q9w3b8",
  env: {
    url: 'https://rahulshettyacademy.com',
    CYPRESS_RECORD_KEY: 'a51bdf97-d030-4e9c-afe2-f89563f56aba'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      'cypress/integration/cheqrboard/tests/*.js',
      'cypress/integration/examples/*.js'
    ]
  }
});
