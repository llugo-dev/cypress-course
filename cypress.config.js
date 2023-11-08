const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  projectId: "q9w3b8",
  env: {
    url: 'https://rahulshettyacademy.com'
  },
  retries: {
    runMode: 1
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
