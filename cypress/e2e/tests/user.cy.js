import User from '../../lib/user.cy';

describe('User do login', function () {
	const userObject = new User();

	context('Given I access login page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
		});

		context('When I login with credential wrong', () => {
			beforeEach(() => {
				userObject.login('rian.cahyadi@mailinator.com', 'P@55word');
			});

			it('Then I see error message', () => {
				cy.contains('Username or password is incorrect.').should('be.visible');
				cy.screenshot('wrong credential');
			});
		});
	});

	context('Given I access login page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
		});
		context('When I login with credential existing', () => {
			beforeEach(() => {
				userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			});

			it('Then I see dashboard page', () => {
				cy.contains('Dashboard').should('be.visible');
				cy.screenshot('logged in');
			});
		});
	});
});
