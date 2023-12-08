class User {
	login(email, password) {
		cy.get('#username').type(email);
		cy.get('#password').type(password);
		cy.contains('Login').click();
		cy.contains('Welcome Back!');
		// cy.wait(5000);
	}

	forgotPassword(email) {
		// cy.contains('Forgot Password').click();
		cy.contains('Reset Password').should('be.visible');
		cy.get('#email').type(email);
		cy.contains('Send').click();
	}
	//

	// Register
	register() {
		cy.contains('Register Now').click();
		cy.contains('Welcome to Referit').should('be.visible');
		this.inputFirstname('rian');
		this.inputLastName('cahyadi');
		this.inputEmailAddress('rian.cahyadi@flexidev.co');
		this.inputMobilePhone('087794875831');
		this.inputPassword('P@55word');
		this.inputConfirmPassword('P@55word');
		cy.contains('Register').click();
		cy.contains('Confirm your email address').should('be.visible');
	}

	inputFirstname(value) {
		cy.get('#firstname').type(value);
	}

	inputLastName(value) {
		cy.get('#lastname').type(value);
	}

	inputEmailAddress(value) {
		cy.get('#email').type(value);
	}

	inputMobilePhone(value) {
		cy.get('input[name=telephone]').type(value);
		cy.get('input[name=telephone]').type(value);
	}

	inputPassword(value) {
		cy.get('#password').type(value);
	}

	inputConfirmPassword(value) {
		cy.get('#confirm-password').type(value);
	}
	// End Register

	// Activation
	activation() {
		cy.contains('Your account has been successfully activated!').should(
			'be.visible'
		);
	}
	// End Activation

	// Set up your profile
	setupFirstName(value) {
		cy.get('#firstname').clear();
		cy.get('#firstname').type(value);
	}

	setupLastName(value) {
		cy.get('#lastname').clear();
		cy.get('#lastname').type(value);
	}

	setupMobilePhone(value) {
		cy.get('#input[name=telephone]').clear();
		cy.get('input[name=telephone]').type(value);
	}

	setupBio(value) {
		cy.get('#bio').clear();
		cy.get('#bio').type(value);
	}

	clickButtonNext() {}
}

export default User;
