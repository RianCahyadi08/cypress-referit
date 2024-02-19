class Contact {
	clickContactModule() {
		cy.contains('Contact')
			.invoke('removeAttr', 'target')
			.click({ multiple: true, force: true });
		cy.url().should('include', 'https://referit.co/contact/');
	}
}

export default Contact;
