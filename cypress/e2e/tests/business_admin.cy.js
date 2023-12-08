import BusinessAdmin from '../../lib/business_admin.cy';
import User from '../../lib/user.cy';

describe('User access contact module', function () {
	const userObject = new User();
	const BusinessAdminObject = new BusinessAdmin();

	context.skip('Given I dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});

		context('When I click business admin module', () => {
			it('Then I will be redirected to contact new tab page', () => {
				BusinessAdminObject.moveToBusinessAdmin();
				cy.screenshot('business admin page');
			});
		});
	});

	context.skip('Given I dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});

		context('When I click business admin module', () => {
			context('AND I click Rewards Settings tab', () => {
				it('Then I will be redirected to rewards settings tab', () => {
					BusinessAdminObject.moveToBusinessAdmin();
					BusinessAdminObject.clickTabRewardsSettings();
					cy.screenshot('rewards settings page');
				});
			});
		});
	});

	context.skip('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
		});

		context('When I am click Rewards Settings tab', () => {
			context('And I create new charity', () => {
				it('Then I successfully created new charity', () => {
					BusinessAdminObject.clickTabRewardsSettings();
					BusinessAdminObject.clickNewCharityButton();
					BusinessAdminObject.inputCharityName('charityNameRianSatu');
					BusinessAdminObject.inputDescription('Lorem ipsum dolor sit amet');
					BusinessAdminObject.clickBtnSave();
					cy.screenshot('add new charity');
				});
			});
		});
	});

	context.skip('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
		});

		context('When I am click Rewards Settings tab', () => {
			context('And I update new charity', () => {
				it('Then I successfully updated new charity', () => {
					BusinessAdminObject.clickTabRewardsSettings();
					BusinessAdminObject.clickIconEdit();
					BusinessAdminObject.inputCharityName('charityNameRianSatuUpdate');
					BusinessAdminObject.inputDescription(
						'Lorem ipsum dolor sit amet update'
					);
					// BusinessAdminObject.clickBtnSave();
					cy.screenshot('updated charity');
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
		});

		context('When I am click Rewards Settings tab', () => {
			context('And I delete charity', () => {
				it('Then I successfully deleted charity', () => {
					BusinessAdminObject.clickTabRewardsSettings();
					BusinessAdminObject.deleteCharity();
					// BusinessAdminObject.clickBtnSave();
					cy.screenshot('delete charity');
				});
			});
		});
	});
});
