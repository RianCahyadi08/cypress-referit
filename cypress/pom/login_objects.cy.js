class Login {
	openApp() {
		// cy.visit('https://app-dev.referit.co/login');
		cy.visit('http://localhost:3000/login');
		cy.title().should('eq', 'Referit - Login');
	}

	setEmail(value) {
		cy.get('#username').type(value);
		cy.get('#username').should('have.value', value);
	}

	setPassword(value) {
		cy.get('#password').type(value);
		cy.get('#password').should('have.value', value);
	}

	clickBtnLogin() {
		cy.contains('Login').click();
		// cy.intercept();
		// cy.route({
		// https://app-dev.referit.co/api/authentication/login
		// 	url: 'api/authentication/login',
		// 	method: 'POST',
		// 	status: 200,
		// 	response: {},
		// });
		cy.get('h1').should('have.text', 'Welcome Back!');
		cy.wait(1000);
	}

	clickForgotPassword() {
		cy.contains('Forgot Password?').click();
		cy.title().should('eq', 'Referit - Forgot Password');
	}

	clickRegisterNow() {
		cy.contains('Register Now').click();
		cy.title().should('eq', 'Referit - Register');
	}

	clickGoBackTo() {
		cy.contains('referit.co')
			.invoke('removeAttr', 'target')
			.click({ multiple: true, force: true });
		cy.url().should('include', 'https://referit.co/');
	}
}

export default Login;
