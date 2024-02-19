class ForgotPassword {
	setEmail(value) {
		cy.get('#email').type(value);
		cy.get('#email').should('have.value', value);
	}

	clickBtnSend() {
		cy.get(
			'button[class*="bg-main-pink-1 v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--dark v-size--small"]'
		).click();
		cy.wait(1000);
	}

	clickBackToLogin() {
		cy.contains('Back to Login').click();
		cy.title().should('eq', 'https://app-dev.referit.co/login');
	}

	clickGoBackTo() {
		cy.contains('referit.co')
			.invoke('removeAttr', 'target')
			.click({ multiple: true, force: true });
		cy.url().should('include', 'https://referit.co/');
	}
}

export default ForgotPassword;
