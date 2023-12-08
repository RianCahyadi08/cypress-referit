class Opportunities {
	moveToOpportunities() {
		cy.contains('Opportunities').click();
		cy.contains('My Opportunities').should('be.visible');
		cy.wait(1000);
	}

	searchOpportunities(value) {
		cy.get('#search').type(value);
		cy.get('div[class*="r-card r-card--vertical r-card--light"]').should(
			'be.visible'
		);
		cy.get(
			'button[class*="v-icon notranslate v-icon--link mdi mdi-magnify theme--dark"]'
		).click();
		cy.wait(1000);
	}

	clickBtnFilter() {
		cy.contains('Filter').click();
		cy.contains('Filter').should('be.visible');
	}

	removeInProgress() {
		cy.get('#inprogress').uncheck('6', { force: true });
	}

	removePendingOpportunity() {
		cy.get('#pending').uncheck('3', { force: true });
	}
	removeCompletedOpportunity() {
		cy.get('#complete').uncheck('7', { force: true });
	}
	removeDeclinedOpportunity() {
		cy.get('#declined').uncheck('2', { force: true });
	}
	removeCancelledOpportunity() {
		cy.get('#cancelled').uncheck('10', { force: true });
	}

	removeOnHold() {
		cy.get('#onhold').uncheck('9', { force: true });
	}

	checkInProgress() {
		cy.get('#inprogress').check('6', { force: true });
	}

	checkPendingOpportunity() {
		cy.get('#pending').check('3', { force: true });
	}
	checkCompletedOpportunity() {
		cy.get('#complete').check('7', { force: true });
	}
	checkDeclinedOpportunity() {
		cy.get('#declined').check('2', { force: true });
	}
	checkCancelledOpportunity() {
		cy.get('#cancelled').check('10', { force: true });
	}

	checkOnHold() {
		cy.get('#onhold').check('9', { force: true });
	}

	checkExpired() {
		cy.get('#expired').check('5', { force: true });
	}

	clickBtnClearFilter() {
		cy.get(
			'button[class*="mr-2 btn-txt-transform-none mt-2 v-btn v-btn--outlined v-btn--rounded v-btn--text theme--light elevation-0 v-size--default"]'
		).click();
	}

	clickBtnShowResult() {
		cy.get(
			'button[class*="btn-txt-transform-none mt-2 v-btn v-btn--has-bg v-btn--rounded theme--dark elevation-0 v-size--default"]'
		).click();
		cy.wait(1000);
	}

	acceptOpportunities() {
		cy.get(
			'button[class*="btn-txt-transform-none bg-main-pink-1 white--text py-2 v-btn v-btn--has-bg v-btn--rounded theme--dark elevation-0 v-size--small"]'
		)
			.first()
			.click();
	}

	// Flow declined opportunities
	clickDecline() {
		cy.get(
			'button[class*="btn-txt-transform-none py-2 mr-2 v-btn v-btn--outlined v-btn--rounded theme--dark elevation-0 v-size--small"]'
		).click();
		cy.contains('Decline this Opportunity').should('be.visible');
	}

	inputDeclineMessage(value) {
		cy.get('textarea[id="decline-message"]').type(value);
		cy.get('textarea[id="decline-message"]').should('have.value', value);
	}

	clickSendDecline() {
		cy.get(
			'button[class*="text-font-16 font-weight-400 btn-txt-transform-none bg-main3 white--text v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--default"]'
		).click();
		cy.wait(1000);
	}
	// End

	// Flow Subscribe
	clickSubscribe() {
		cy.get(
			'button[class*="btn-txt-transform-none bg-main-pink-1 white--text py-2 v-btn v-btn--has-bg v-btn--rounded theme--dark elevation-0 v-size--small"]'
		).click();
		cy.contains(
			'By subscribing, you can start adding employees and accept opportunities.'
		).should('be.visible');
	}

	clickBtnSubscribe() {
		cy.get(
			'button[class*="text-decoration-none white--text btn-txt-transform-none bg-main4 my-auto mt-1 ml-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--default"]'
		).click();
		cy.contains('Confirm Subscription').should('be.visible');
	}

	clickTermsOfUse() {
		// cy.get('a[href*="https://referit.co/terms-of-use/"]')
		// 	.invoke('removeAttr', 'target')
		// 	.click();
		cy.get('a[href*="https://referit.co/terms-of-use/"]').click();
		cy.wait(1000);
		cy.get('a[href*="https://referit.co/terms-of-use/"]').should(
			'have.attr',
			'href',
			'https://referit.co/terms-of-use/'
		);
	}

	clickPrivacyPolicy() {
		// cy.get('a[href*="https://referit.co/terms-of-use/"]')
		// 	.invoke('removeAttr', 'target')
		// 	.click();
		cy.get('a[href*="https://referit.co/privacy-policy/"]').click();
		cy.wait(1000);
		cy.get('a[href*="https://referit.co/privacy-policy/"]').should(
			'have.attr',
			'href',
			'https://referit.co/privacy-policy/'
		);
	}

	inputCardNumber(value) {
		cy.get('input[name=cardnumber]').type(value);
		cy.get('input[name=cardnumber]').should('have.value', value);
	}

	inputExpiry(value) {
		cy.get('input[name=exp-date]').type(value);
		cy.get('input[name=exp-date]').should('have.value', value);
	}

	inputCVC(value) {
		cy.get('input[name=cvc]').type(value);
		cy.get('input[name=cvc]').should('have.value', value);
	}

	checkCTA() {
		cy.get('input[type=checkbox]').check();
	}
	// End

	detailOpportunities() {
		cy.get(
			'div[class*="r-card r-card--vertical r-card--light r-card--paywall"]'
		)
			.first()
			.click();
		cy.wait(1000);
	}
}

export default Opportunities;
