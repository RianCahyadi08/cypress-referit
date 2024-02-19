import Settings from '../../lib/settings.cy';
import User from '../../lib/user.cy';

describe('User access opportunities module', function () {
	const userObject = new User();
	const settingObject = new Settings();

	context('Given I access setting page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			settingObject.moveToSetting();
		});

		it('Then I can see setting page', () => {
			cy.screenshot('setting page');
		});
	});

	context('Given I access setting page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			settingObject.moveToSetting();
			settingObject.uploadPhoto(
				'D:/#RIANCAHYADI/Projects/Referit/Cypress/cypress/images/among.png'
			);
			settingObject.inputFirstName('Rian');
			settingObject.inputLastName('Cahyadi');
			settingObject.inputEmail('rian.cahyadi@flexidev.co');
			settingObject.inputMobilePhone('87794875831');
			settingObject.inputDescription('Lorem ipsum dolor sit amet');
			settingObject.clickBtnSave();
		});

		context('When I update profile and click on the save button', () => {
			it('Then I successfully updated profile', () => {
				cy.screenshot('updated profile');
			});
		});
	});

	context('Given I access setting page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			settingObject.moveToSetting();
			settingObject.tabNotifications();
		});

		context('When I click notification tab', () => {
			it('Then I will be redirected to notification page', () => {
				cy.screenshot('notification page');
			});
		});
	});

	context('Given I access setting page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			settingObject.moveToSetting();
			settingObject.tabNotifications();
			settingObject.turnOnOffOpportunity();
		});

		context(
			'When I click notification tab & Turn on notification opportunity',
			() => {
				it('Then I can see button is ON', () => {
					cy.screenshot('on off notification opportunity');
				});
			}
		);
	});

	context('Given I access setting page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			settingObject.moveToSetting();
			settingObject.tabNotifications();
			settingObject.turnOnOffOpportunity();
		});

		context(
			'When I click notification tab & Turn on notification referral',
			() => {
				it('Then I can see button is ON', () => {
					cy.screenshot('on off notification referral');
				});
			}
		);
	});

	context('Given I access setting page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			settingObject.moveToSetting();
			settingObject.tabNotifications();
			settingObject.turnOnOffOpportunity();
		});

		context(
			'When I click notification tab & Turn on notification subscription',
			() => {
				it('Then I can see button is ON', () => {
					cy.screenshot('on off notification subscription');
				});
			}
		);
	});

	context('Given I access setting page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			settingObject.moveToSetting();
			settingObject.tabNotifications();
			settingObject.turnOnOffReward();
		});

		context(
			'When I click notification tab & Turn on notification reward',
			() => {
				it('Then I can see button is ON or OFF', () => {
					cy.screenshot('on off notification reward');
				});
			}
		);
	});

	context.only('Given I access setting page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			settingObject.moveToSetting();
			settingObject.tabAccount();
		});

		context('When I click account tab', () => {
			it('AND I download paid', () => {
				context('Then I successfully downloaded', () => {
					settingObject.downloadPaid();
				});
			});
		});
	});

	context.skip('Given I access setting page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			settingObject.moveToSetting();
			settingObject.clickAddBusinessProfile();
			settingObject.inputBusinessName('Business Rian Satu');
			settingObject.selectIndustry('Computer');
			settingObject.inputBusinessAddress('Bandung');
			settingObject.inputEmailAddress('rian.cahyadi101@flexidev.co');
			settingObject.inputWebsite('https://www.saucedemo.com/v1/');
			settingObject.inputLinkedlnUrl('https://www.linkedin.com/in/test');
			settingObject.inputFacebookUrl('https://www.facebook.com/test');
			settingObject.inputInstagramUrl('https://www.instagram.com/test');
			settingObject.clickBtnSaveVerify();
		});

		context(
			'When I click add business profile And completed all the fields',
			() => {
				it('Then I successfully created business profile', () => {
					cy.screenshot('create business profile');
				});
			}
		);
	});
});
