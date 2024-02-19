import Login from '../../pom/login_objects.cy';
import Contact from '../../pom/contact_object.cy';

describe('User access contact module', function () {
	const loginObject = new Login();
	const contactObject = new Contact();

	context('Given I dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			contactObject.clickContactModule();
		});

		context('When I click contact module', () => {
			it('Then I will be redirected to contact new tab page', () => {
				cy.screenshot('contact page');
			});
		});
	});
});
