const { defineConfig } = require('cypress');

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		charts: true,
		reportPageTitle: 'report-automation-referit',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: false,
		videoOnFailOnly: true,
	},
	// viewportWidth: 2000,
	// viewportHeight: 900,
	e2e: {
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on);
			// implement node event listeners here
		},
	},
	defaultCommandTimeout: 10000,
	defaulpageLoadTimeout: 100000,
});
