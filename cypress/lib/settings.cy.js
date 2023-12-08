class Settings {
	moveToSetting() {
		cy.contains('Settings').click();
		cy.contains('Settings').should('be.visible');
		cy.wait(1000);
	}

	uploadPhoto(value) {
		cy.get('input[type=file]').selectFile(value, { force: true });
		cy.wait(1000);
		cy.get(
			'button[class*="text-decoration-none white--text btn-txt-transform-none bg-main2 my-auto mt-1 ml-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
		).click();
	}

	removePhoto() {}

	inputFirstName(value) {
		cy.get('input#firstname').clear();
		cy.get('input#firstname').type(value);
		cy.get('input#firstname').should('have.value', value);
	}

	inputLastName(value) {
		cy.get('input#lastname').clear();
		cy.get('input#lastname').type(value);
		cy.get('input#lastname').should('have.value', value);
	}

	inputEmail(value) {
		cy.get('input#email').clear();
		cy.get('input#email').type(value);
		cy.get('input#email').should('have.value', value);
	}

	inputMobilePhone(value) {
		cy.get('input[name=telephone]').clear();
		cy.get('input[name=telephone]').type(value);
		cy.get('input[name=telephone]').should('have.value', value);
	}

	inputDescription(value) {
		cy.get('textarea#bio').clear();
		cy.get('textarea#bio').type(value);
		cy.get('textarea#bio').should('have.value', value);
	}

	clickBtnSave() {
		cy.get('button[type=submit]').click();
		cy.wait(1000);
	}

	// Business Profile
	clickAddBusinessProfile() {
		cy.contains('Add Business Profile').click();
		cy.contains('Set up your business profile').should('be.visible');
	}

	inputBusinessName(value) {
		cy.get('input#business-name').type(value);
		cy.get('input#business-name').should('have.value', value);
	}

	selectIndustry(value) {
		cy.get('input#industry').click();
		cy.get('input#industry').type(value + '{enter}', { force: true });
	}

	inputBusinessAddress(value) {
		cy.get('input#business-address').type(value);
		cy.get('input#business-address').should('have.value', value);
	}

	inputEmailAddress(value) {
		cy.get('input#email').type(value);
		cy.get('input#email').should('have.value', value);
	}

	inputWebsite(value) {
		cy.get('input#website').type(value);
		cy.get('input#website').type(value);
		cy.get('input#website').should('have.value', value);
	}

	inputLinkedlnUrl(value) {
		cy.get('input#linkedInUrl').type(value);
		cy.get('input#linkedInUrl').should('have.value', value);
	}

	inputFacebookUrl(value) {
		cy.get('input#facebookUrl').type(value);
		cy.get('input#facebookUrl').should('have.value', value);
	}

	inputInstagramUrl(value) {
		cy.get('input#instagramUrl').type(value);
		cy.get('input#instagramUrl').should('have.value', value);
	}

	clickBtnSaveVerify() {
		cy.contains('Save & Verify').click();
		cy.wait(1000);
	}

	// Notification
	tabNotifications() {
		cy.visit('https://app-dev.referit.co/settings/notifications');
		cy.wait(1000);
	}

	turnOnOffOpportunity() {
		// cy.get('div[class*="v-switch-button"]').click();
		cy.get('span[class*="v-switch-label"]')
			.first()
			.invoke('text')
			.then(($buttonToggle) => {
				if ($buttonToggle == 'ON') {
					cy.get('span[class*="v-switch-label v-left"]').click({
						multiple: true,
						force: true,
					});
					cy.contains('Confirm').click();
					cy.wait(1000);
					cy.get('span[class*="v-switch-label v-right"]').should('be.visible');
					cy.log('Button nya ON');
				} else {
					cy.get('.v-switch-button').click({ multiple: true, force: true });
					cy.get('span[class*="v-switch-label v-left"]').should('be.visible');
					cy.log('Button nya OFF');
				}
			});
	}

	turnOnOffReferral() {
		// cy.get('div[class*="v-switch-button"]').click();
		cy.get('span[class*="v-switch-label"]')
			.first()
			.invoke('text')
			.then(($buttonToggle) => {
				if ($buttonToggle == 'ON') {
					cy.get('span[class*="v-switch-label v-left"]').click({
						multiple: true,
						force: true,
					});
					cy.contains('Confirm').click();
					cy.wait(1000);
					cy.get('span[class*="v-switch-label v-right"]').should('be.visible');
					cy.log('Button nya ON');
				} else {
					cy.get('.v-switch-button').click({ multiple: true, force: true });
					cy.get('span[class*="v-switch-label v-left"]').should('be.visible');
					cy.log('Button nya OFF');
				}
			});
	}

	turnOnOffSubscription() {
		// cy.get('div[class*="v-switch-button"]').click();
		cy.get('span[class*="v-switch-label"]')
			.first()
			.invoke('text')
			.then(($buttonToggle) => {
				if ($buttonToggle == 'ON') {
					cy.get('span[class*="v-switch-label v-left"]').click({
						multiple: true,
						force: true,
					});
					cy.contains('Confirm').click();
					cy.wait(1000);
					cy.get('span[class*="v-switch-label v-right"]').should('be.visible');
					cy.log('Button nya ON');
				} else {
					cy.get('.v-switch-button').click({ multiple: true, force: true });
					cy.get('span[class*="v-switch-label v-left"]').should('be.visible');
					cy.log('Button nya OFF');
				}
			});
	}

	turnOnOffReward() {
		cy.get('span[class*="v-switch-label"]')
			.last()
			.invoke('text')
			.then(($buttonToggle) => {
				if ($buttonToggle == 'ON') {
					cy.get('span[class*="v-switch-label v-left"]').click({
						multiple: true,
						force: true,
					});
					cy.contains('Confirm').click();
					cy.wait(1000);
					cy.get('span[class*="v-switch-label v-right"]').should('be.visible');
					cy.log('Button nya ON');
				} else {
					cy.get('.v-switch-button').click({ multiple: true, force: true });
					cy.get('span[class*="v-switch-label v-left"]').should('be.visible');
					cy.log('Button nya OFF');
				}
			});
		cy.wait(1000);
	}
}

export default Settings;
