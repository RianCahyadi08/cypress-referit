import Contact from '../../lib/contact.cy';
import User from '../../lib/user.cy';

describe('User access contact module', function () {
	const userObject = new User();
	const contactObject = new Contact();

	context('Given I dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});

		context('When I click contact module', () => {
			it('Then I will be redirected to contact new tab page', () => {
				contactObject.clickContactModule();
				cy.screenshot('contact page');
			});
		});
	});
});
