class Rewards {
	clickRewardsModule() {
		cy.get('a[href="/reward"]').eq(1).click();
		cy.url().should('include', 'https://app-dev.referit.co/reward');
	}

	viewHistory() {
		var length;
		cy.get(
			'button[class*="mr-2 mb-1 text-decoration-none white--text btn-txt-transform-none my-auto v-btn v-btn--outlined v-btn--rounded theme--dark elevation-0 v-size--x-small"]'
		).then(($value) => {
			length = $value.length;
			if (length > 0) {
				cy.log(length);
				cy.log('Ada rewards nya');
				cy.get(
					'button[class*="mr-2 mb-1 text-decoration-none white--text btn-txt-transform-none my-auto v-btn v-btn--outlined v-btn--rounded theme--dark elevation-0 v-size--x-small"]'
				)
					.first()
					.click();
				cy.get(
					'div[class*="v-dialog dialog-reward-log v-dialog--active v-dialog--persistent"]'
				).should('be.visible');
				cy.wait(500);
			} else {
				cy.log('tidak ada');
			}
		});
	}

	showMore() {
		var length;
		cy.get('div[class*="my-auto col-sm-3 col-12"]').then(($value) => {
			length = $value.length;
			if (length > 0) {
				cy.log(length);
				cy.log('Ada lebih dari 10');
				cy.get(
					'button[class*="text-decoration-none white--text btn-txt-transform-none bg-main2 my-auto mt-1 ml-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
				).click();
				cy.get('div[class*="my-auto col-sm-3 col-12"]')
					.eq(11)
					.should('be.visible');
				cy.wait(500);
			} else {
				cy.log('tidak ada');
			}
		});
	}

	viewRewards() {
		cy.get(
			'button[class="mb-1 text-decoration-none white--text btn-txt-transform-none bg-main-pink-1 my-auto v-btn v-btn--has-bg v-btn--rounded theme--dark elevation-0 v-size--x-small"]'
		).click();
		cy.get('div[class*="font-size-14 text-main1"]').should('be.visible');
	}

	giftYourToken(email, token) {
		cy.get(
			'button[class*="text-decoration-none white--text btn-txt-transform-none mb-1 v-btn v-btn--has-bg v-btn--rounded theme--dark elevation-0 v-size--x-small bg-main-pink-1"]'
		).click();
		cy.get('div[class*="pa-4 v-card v-sheet theme--light"]').should(
			'be.visible'
		);
		cy.get('input[id="email"]').type(email);
		cy.get('input[id="email"]').should('have.value', email);
		cy.get('input[type="number"]').type(token);
		cy.get('input[type="number"]').should('have.value', token);
		cy.get(
			'button[class*="text-decoration-none white--text btn-txt-transform-none v-btn v-btn--disabled v-btn--has-bg v-btn--rounded theme--light v-size--x-small"]'
		).click();
	}

	donateYourBusiness(token) {
		var length;
		cy.get(
			'div[class*="d-flex flex-wrap mb-3 v-card v-card--flat v-sheet theme--dark rounded-lg bg-blue-7"]'
		).then(($value) => {
			length = $value.length;
			if (length > 0) {
				cy.log(length);
				cy.log('Ada lebih dari 11');
				cy.get(
					'button[class*="text-decoration-none white--text btn-txt-transform-none v-btn v-btn--has-bg v-btn--rounded theme--dark elevation-0 v-size--x-small"]'
				)
					.eq(1)
					.click();
				cy.get(
					'div[class*="v-dialog v-dialog--active v-dialog--persistent"]'
				).should('be.visible');
				cy.wait(500);
				cy.get('input[type="number"]').type(token);
				cy.get('input[type="number"]').should('have.value', token);
				cy.get(
					'button[class="text-decoration-none white--text btn-txt-transform-none v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--x-small bg-main-pink-1"]'
				).click();
				cy.wait(500);
			} else {
				cy.log('tidak ada');
			}
		});
	}
}

export default Rewards;
