class Dashboard {
	clickDashboardModule() {
		cy.contains('Dashboard').click();
		cy.contains('Welcome Back!').should('have.visible');
	}

	clickGoToWelcomeWalkthrough() {
		cy.contains('Go to welcome walkthrough').click();
		cy.contains('Welcome to referit').should('be.visible');
	}

	clickWelcomeGuide() {
		cy.contains('Welcome Guide').click();
		cy.wait(1000);
		cy.get(
			'video[src*="https://cdn.referit.co/static/onb-ind-01__welcome.mp4"]'
		).should('be.visible');
	}

	clickMakeAReferral() {
		cy.contains('Make a Referral').click();
		cy.wait(1000);
		cy.get(
			'video[src*="https://cdn.referit.co/static/onb-ind-02__make-a-referral.mp4"]'
		).should('be.visible');
	}

	clickRedeemRewards() {
		cy.contains('Redeem Rewards').click();
		cy.wait(1000);
		cy.get(
			'video[src*="https://cdn.referit.co/static/onb-ind-03__rewards.mp4"]'
		).should('be.visible');
	}

	viewAllMyOpportunities() {
		cy.get('a[href*="/opportunities/list"]').click({
			force: true,
			multiple: true,
		});
		cy.wait(1000);
		cy.contains('My Opportunities').should('be.visible');
	}

	viewAllMyReferrals() {
		cy.get('a[href*="/referral/list"]').click({ force: true, multiple: true });
		cy.wait(1000);
		cy.contains('My Referrals').should('be.visible');
	}

	viewAllMyRewards() {
		cy.get('a[href*="/reward"]').click({ force: true, multiple: true });
		cy.wait(1000);
		cy.contains('My Rewards').should('be.visible');
	}

	clickNotification() {
		cy.get('i.mdi-bell').click();
		cy.contains('Notifications').should('be.visible');
	}

	clickViewNotification() {
		cy.get(
			'button[class*="v-btn v-btn--outlined v-btn--rounded theme--light v-size--x-small"]'
		)
			.should('not.exist')
			.then(($element) => {
				if ($element) {
					cy.log('ada');
					cy.contains('Close').should('be.visible');
				} else {
					cy.log('tidak ada');
				}
			});
		// cy.get(
		// 	'button[class*="v-btn v-btn--outlined v-btn--rounded theme--light v-size--x-small"]'
		// )
		// 	.first()
		// 	.click();
		// cy.contains('Close').should('be.visible');
		// var length;
		// cy.get(
		// 	'button[class*="v-btn v-btn--outlined v-btn--rounded theme--light v-size--x-small"]'
		// ).then(($value) => {
		// 	length = $value.length;
		// 	cy.log(length);
		// 	if (length > 0) {
		// 		cy.log('Ada notification nya');
		// 		cy.contains('Close').should('be.visible');
		// 	} else {
		// 		cy.log('tidak ada');
		// 	}
		// });
	}

	clickBtnNewReferral() {
		cy.contains('New Referral').click();
		cy.contains('New Referral').should('be.visible');
	}

	inputReferralTitle(value) {
		cy.get('input#referral-title').clear();
		cy.get('input#referral-title').type(value);
		cy.get('input#referral-title').should('have.value', value);
	}

	inputNameReffering(value) {
		cy.get('input#provider-name').type(value);
		cy.get('input#provider-name').should('have.value', value);
	}

	inputEmailAddressReffering(value) {
		cy.get('input#provider-contact').type(value);
		cy.get('input#provider-contact').should('have.value', value);
	}

	inputNameToClient(value) {
		cy.get('input#client-name').type(value);
		cy.get('input#client-name').should('have.value', value);
	}

	inputEmailToClient(value) {
		cy.get('input#referred-contact').type(value);
		cy.get('input#referred-contact').should('have.value', value);
	}

	inputMessageToClient(value) {
		cy.get('textarea[name=message-to-provider]').type(value);
		cy.get('textarea[name=message-to-provider]').should('have.value', value);
	}

	clickBtnSendNewReferral() {
		cy.contains('Send').click();
		cy.wait(3000);
	}

	logout() {
		cy.xpath('//*[@id="app"]/div/div[1]/header/div/button[2]').click();
		cy.contains('Sign Out').should('be.visible');
		cy.contains('Sign Out').click();
		cy.contains('Yes').should('be.visible');
		cy.contains('Yes').click();
		cy.contains('Forgot Password?').should('be.visible');
	}
}

export default Dashboard;
