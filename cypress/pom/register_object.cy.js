class Register {
	setFirstname(value) {
		cy.get('#firstname').type(value);
		cy.get('#firstname').should('have.value', value);
	}

	setLastName(value) {
		cy.get('#lastname').type(value);
		cy.get('#lastname').should('have.value', value);
	}

	setEmailAddress(value) {
		cy.get('#emailaddress').type(value);
		cy.get('#emailaddress').should('have.value', value);
	}

	setCountry() {
		cy.get('div[class*="v-select__selections"]').click();
		cy.wait(500);
		cy.get('div[class*="v-list-item v-list-item--link theme--dark"]')
			.eq(15)
			.scrollIntoView();
		cy.wait(500);

		cy.get('div[class*="v-list-item v-list-item--link theme--dark"]')
			.eq(38)
			.scrollIntoView();
		cy.wait(500);
		cy.get('div[class*="v-list-item v-list-item--link theme--dark"]')
			.eq(57)
			.scrollIntoView();
		cy.wait(500);
		cy.get('div[class*="v-list-item v-list-item--link theme--dark"]')
			.eq(76)
			.scrollIntoView();
		// cy.wait(500);
		// cy.get('div[class*="v-list-item v-list-item--link theme--dark"]')
		// 	.eq(95)
		// 	.scrollIntoView();
		// cy.wait(500);
		// cy.get('div[class*="v-list-item v-list-item--link theme--dark"]')
		// 	.eq(95)
		// 	.scrollIntoView();
		cy.wait(500);
		cy.get('div[class*="v-list-item v-list-item--link theme--dark"]')
			.contains('Indonesia +62')
			.click();
		// cy.get(
		// 	'div[class*="v-menu__content theme--dark menuable__content__active"]'
		// ).scrollTo(0, 2000);
		// cy.get('div[class*="v-list-item v-list-item--link theme--dark"]')
		// 	.eq(5)
		// 	.click();
		// cy.get('div[class*="v-select__selections"]').type('{Albania}', {
		// 	parseSpecialCharSequences: false,
		// 	force: true,
		// });
	}

	setMobilePhone(value) {
		// cy.get('input[name=telephone]').type(value);
		cy.get('input[name=telephone]').type(value);
		cy.get('input[name=telephone]').should('have.value', value);
	}

	setPassword(value) {
		cy.get('#password').type(value);
		cy.get('#password').should('have.value', value);
	}

	setConfirmPassword(value) {
		cy.get('#passwordconfirm').type(value);
		cy.get('#passwordconfirm').should('have.value', value);
	}

	clickBtnRegister() {
		cy.get(
			'button[class*="bg-main-pink-1 v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--dark v-size--small"]'
		).click();
		cy.wait(2000);
	}

	verifyEmailRegister(value) {
		cy.origin('https://yopmail.com/', { args: { value } }, ({ value }) => {
			cy.visit('/');
			cy.get('input[class="ycptinput"]').type(value);
			cy.get('input[class="ycptinput"]').type('{enter}');
			cy.title().should('eq', 'Inbox');
			cy.wait(2000);
			cy.get('iframe#ifmail')
				.should('be.exist')
				.then(($iframe) => {
					const doc = $iframe.contents();
					cy.log(doc);
					cy.wrap(
						// doc.find(`a[href="https://login.${baseUrl}.catalystglobal.games"]`)
						doc.find(`a[href="http://url6085.referit.co/ls/click?upn"]`)
							.prevObject[0].links
					)
						.should('be.exist')
						.then(($link) => {
							const href = $link[0].href;
							cy.visit(href);
							cy.log(href);
						});
				});
			// cy.get('input[type="password"]').eq(1).type(setNewPassword);
			// cy.get('input[type="password"]')
			// 	.eq(1)
			// 	.should('have.value', setNewPassword);
			// cy.get('input[type="password"]').eq(2).type(setConfirmPassword);
			// cy.get('input[type="password"]')
			// 	.eq(1)
			// 	.should('have.value', setConfirmPassword);
		});

		cy.contains('Your account has been successfully activated!').should(
			'be.visible'
		);
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

export default Register;
