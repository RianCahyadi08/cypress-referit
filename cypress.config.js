const { defineConfig } = require('cypress');
module.exports = defineConfig({
	video: true,
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
			on('task', {});
		},
	},
	defaultCommandTimeout: 10000,
	defaulpageLoadTimeout: 100000,
	viewportHeight: 800,
	viewportWidth: 800,
});
