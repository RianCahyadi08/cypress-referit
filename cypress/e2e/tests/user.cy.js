import Login from '../../pom/login_objects.cy';
import ForgotPassword from '../../pom/forgot_password_object.cy';
import Register from '../../pom/register_object.cy';

describe('User do login', function () {
	const loginObject = new Login();
	const forgotPasswordObject = new ForgotPassword();
	const registerObject = new Register();

	let firstName = faker.person.firstName();
	let lastName = faker.person.lastName();
	let firstLastName = `${firstName}.${lastName}@yopmail.com`;
	let mobileNumber = faker.number.int({ min: 1, max: 10000000000 });

	context('Given the user on the register page', () => {
		beforeEach(() => {
			loginObject.openApp();
			loginObject.clickRegisterNow();
		});
		context(
			'When the user completed all the fields and click on the register button',
			() => {
				beforeEach(() => {
					registerObject.setFirstname('rian');
					registerObject.setLastName('cahyadi');
					registerObject.setEmailAddress('rian.cahyadi@yopmail.com');
					registerObject.setCountry();
					registerObject.setMobilePhone('87794875831');
					registerObject.setPassword('P@55word');
					registerObject.setConfirmPassword('P@55word');
					registerObject.clickBtnRegister();
					registerObject.verifyEmailRegister('rian.cahyadi@yopmail.com');
				});

				it.only('Then the user successfully register', () => {
					// cy.screenshot('register successfull');
				});
			}
		);
	});

	// context('Given the user access login page', () => {
	// 	beforeEach(() => {
	// 		loginObject.openApp();
	// 	});
	// 	context('When the user login with credential existing', () => {
	// 		beforeEach(() => {
	// 			loginObject.setEmail('rian.cahyadi@flexidev.co');
	// 			loginObject.setPassword('P@55word');
	// 			loginObject.clickBtnLogin();
	// 		});

	// 		it.only('Then I see dashboard page', () => {
	// 			// cy.screenshot('dashboard page');
	// 		});
	// 	});
	// });

	// context('Given the user access login page', () => {
	// 	beforeEach(() => {
	// 		loginObject.openApp();
	// 	});
	// 	context('When the user click forgot password', () => {
	// 		beforeEach(() => {
	// 			loginObject.clickForgotPassword();
	// 		});

	// 		it('Then the user can see forgot password page', () => {
	// 			// cy.screenshot('forgot password page');
	// 		});
	// 	});
	// });

	context.skip('Given the user access forgot password page', () => {
		beforeEach(() => {
			loginObject.openApp();
			loginObject.clickForgotPassword();
		});
		context('When the user click forgot password', () => {
			beforeEach(() => {
				forgotPasswordObject.setEmail('rian.cahyadi@flexidev.co');
				// forgotPasswordObject.clickBtnSend();
			});

			it('Then the user can see forgot password page', () => {
				// cy.screenshot('forgot password success');
			});
		});
	});

	// context('Given the user access login page', () => {
	// 	beforeEach(() => {
	// 		loginObject.openApp();
	// 	});
	// 	context('When the user click register now button', () => {
	// 		beforeEach(() => {
	// 			loginObject.clickRegisterNow();
	// 		});

	// 		it('Then the user can see register page', () => {
	// 			// cy.screenshot('register page');
	// 		});
	// 	});
	// });

	// context('Given the user access register page', () => {
	// 	beforeEach(() => {
	// 		loginObject.openApp();
	// 		loginObject.clickRegisterNow();
	// 	});
	// 	context(
	// 		'When the user completed all the fields and click on the register button',
	// 		() => {
	// 			beforeEach(() => {
	// 				registerObject.setFirstname('rian');
	// 				registerObject.setLastName('cahyadi');
	// 				registerObject.setEmailAddress('rian.cahyadi@mailinator.com');
	// 				registerObject.setCountry();
	// 				registerObject.setMobilePhone('87794875831');
	// 				registerObject.setPassword('P@55word');
	// 				registerObject.setConfirmPassword('P@55word12');
	// 			});

	// 			it('Then the user successfully register', () => {
	// 				// cy.screenshot('register successfull');
	// 			});
	// 		}
	// 	);
	// });

	// context('Given the user access login page', () => {
	// 	beforeEach(() => {
	// 		loginObject.openApp();
	// 	});
	// 	context('When the user click referit.co', () => {
	// 		beforeEach(() => {
	// 			loginObject.clickGoBackTo();
	// 		});

	// 		it('Then the user can see referit production page', () => {
	// 			// cy.screenshot('referit production page');
	// 		});
	// 	});
	// });
});
