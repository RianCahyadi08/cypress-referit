import User from '../../lib/user.cy.js';
import BusinessAdmin from '../../lib/business_admin.cy.js';

describe('User access contact module', function () {
	const userObject = new User();
	const BusinessAdminObject = new BusinessAdmin();

	context('Given I dashboard page', () => {
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

	context('Given I dashboard page', () => {
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

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabRewardsSettings();
		});

		context('When I set reward programs', () => {
			it('Then I successfully set reward programs', () => {
				BusinessAdminObject.turnOnOfRewardProgram();
				// cy.screenshot('rewards settings page');
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

	context('Given I am on the business admin page', () => {
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
					BusinessAdminObject.clickBtnSave();
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
					cy.screenshot('delete charity');
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabRewardsSettings();
		});

		context('When I am click Rewards Settings tab', () => {
			context('And I create reward', () => {
				it('Then I successfully created reward', () => {
					BusinessAdminObject.clickBtnNewReward();
					BusinessAdminObject.uploadImageReward(
						'D:/#RIANCAHYADI/Projects/Referit/Cypress/cypress/images/among.png'
					);
					BusinessAdminObject.inputRewardTitle('reward title');
					BusinessAdminObject.inputDescriptionRewardTitle(
						'lorem ipsum dolor sit amet'
					);
					BusinessAdminObject.inputTokenAmountRequired('1');
					BusinessAdminObject.clickBtnSave();
					cy.screenshot('create reward');
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabRewardsSettings();
		});

		context('When I am click Rewards Settings tab', () => {
			context('And I update reward', () => {
				it('Then I successfully updated reward', () => {
					BusinessAdminObject.updateReward(
						'reward title update',
						'lorem ipsum dolor sit amet update',
						'2'
					);
					cy.screenshot('update reward');
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabRewardsSettings();
		});

		context('When I am click Rewards Settings tab', () => {
			context('And I click detail reward', () => {
				it('Then I successfully view detail reward', () => {
					BusinessAdminObject.detailReward();
					cy.screenshot('detail reward');
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabRewardsSettings();
		});

		context('When I am click Rewards Settings tab', () => {
			context('And I click on button reward', () => {
				it('Then I successfully turn off reward', () => {
					BusinessAdminObject.onOffReward();
					cy.screenshot('turn off reward');
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabRewardsSettings();
		});

		context('When I am click Rewards Settings tab', () => {
			context('And I delete reward', () => {
				it('Then I successfully deleted reward', () => {
					BusinessAdminObject.deleteReward();
					cy.screenshot('delete reward');
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabBusinessProfile();
		});

		context('When I am click Business Profile tab', () => {
			it('Then I will redirected to busines profile page', () => {
				cy.screenshot('business profile page');
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabBusinessProfile();
		});

		context('When I am click Business Profile tab', () => {
			context('AND I click web link business', () => {
				it('Then I will be redirected to web busines profile page', () => {
					BusinessAdminObject.clickWebLink();
					// cy.screenshot('web business profile page');
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabBusinessProfile();
		});

		context('When I am click Business Profile tab', () => {
			context('AND I click linkedln link business', () => {
				it('Then I will be redirected to linkedln busines profile page', () => {
					BusinessAdminObject.clickLinkedlnLink();
					// cy.screenshot('web business profile page');
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabBusinessProfile();
		});

		context('When I am click Business Profile tab', () => {
			context('AND I click facebook link business', () => {
				it('Then I will be redirected to facebook busines profile page', () => {
					BusinessAdminObject.clickFacebookLink();
					// cy.screenshot('web business profile page');
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabBusinessProfile();
		});

		context('When I am click Business Profile tab', () => {
			context('AND I click instagram link business', () => {
				it('Then I will be redirected to instagram busines profile page', () => {
					BusinessAdminObject.clickInstagramLink();
					// cy.screenshot('web business profile page');
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabBusinessProfile();
		});

		context('When I am click Business Profile tab', () => {
			context('AND I click detail owner', () => {
				it('Then I can see owner detail busines profile', () => {
					BusinessAdminObject.detailOwner();
					// cy.screenshot('web business profile page');
				});
			});
		});
	});

	context('Given I am on the business profile page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabBusinessProfile();
			BusinessAdminObject.clickEditBusinessProfile();
		});

		context('When I update business profile', () => {
			it('Then I successfully updated reward programs', () => {
				BusinessAdminObject.uploadImageBusinessProfile(
					'D:/#RIANCAHYADI/Projects/Referit/Cypress/cypress/images/among.png'
				);
				BusinessAdminObject.inputBusinessName('Business Rian Satu');
				BusinessAdminObject.selectIndustry('animation');
				BusinessAdminObject.inputMobilePhone('87794875831');
				BusinessAdminObject.inputBusinessAddress('Bandung');
				BusinessAdminObject.inputEmailAddress('rian.cahyadi101@flexidev.co');
				BusinessAdminObject.inputWebsite(
					'https://www.saucedemo.com/v1/index.html'
				);
				BusinessAdminObject.inputDescriptionBusinessProfile(
					'Lorem ipsum dolor'
				);
				BusinessAdminObject.inputLinkedlnUrl(
					'https://www.linkedin.com/in/test/'
				);
				BusinessAdminObject.inputFacebookUrl('https://www.facebook.com/test');
				BusinessAdminObject.inputInstagramUrl('https://www.instagram.com/test');
				BusinessAdminObject.clickBtnSaveBusinessProfile();
				// cy.screenshot('rewards settings page');
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabBusinessProfile();
		});

		context('When I am click Business Profile tab', () => {
			context('AND I downloaded CSV template', () => {
				it('Then I successfully downloaded CSV template', () => {
					BusinessAdminObject.downloadCSV();
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabBusinessProfile();
		});

		context('When I am click Business Profile tab', () => {
			context('AND I uplodated CSV file', () => {
				it('Then I successfully uplodated CSV template', () => {
					BusinessAdminObject.uploadCSV(
						'D:/#RIANCAHYADI/Projects/Referit/Cypress/cypress/images/CSV_Template_File.csv'
					);
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabBusinessProfile();
		});

		context('When I am click Business Profile tab', () => {
			context('AND I delete bulk invite client', () => {
				it('Then I successfully deleted bulk invite client', () => {
					BusinessAdminObject.deleteBulkInviteClient(
						'D:/#RIANCAHYADI/Projects/Referit/Cypress/cypress/images/CSV_Template_File.csv'
					);
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabBusinessProfile();
		});

		context('When I am click Business Profile tab', () => {
			context('AND I update bulk invite client', () => {
				it('Then I successfully updated bulk invite client', () => {
					BusinessAdminObject.updateBulkInviteClient(
						'D:/#RIANCAHYADI/Projects/Referit/Cypress/cypress/images/CSV_Template_File.csv',
						'firstName update',
						'lastName update',
						'emailupdate@mailinator.com'
					);
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabBusinessProfile();
		});

		context('When I am click Business Profile tab', () => {
			context('AND I invite lient', () => {
				it('Then I successfully invited client', () => {
					BusinessAdminObject.inviteClient(
						'firstname',
						'lastname',
						'email@mailinator.com'
					);
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabClientList();
		});

		context('When I am click Client List tab', () => {
			context('AND I Revoke', () => {
				it('Then I successfully revoke', () => {
					BusinessAdminObject.revoke();
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabClientList();
		});

		context('When I am click Client List tab', () => {
			context('AND I checklist the top checkbox', () => {
				it('Then I successfully checklist all the list', () => {
					BusinessAdminObject.checklistAll();
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabClientList();
		});

		context('When I am click Client List tab', () => {
			context('AND I checklist the client AND Resend', () => {
				it('Then I successfully resend', () => {
					BusinessAdminObject.resend();
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabClientList();
		});

		context('When I am click Client List tab', () => {
			context('AND I checklist the client AND Unchecklist the client', () => {
				it('Then I successfully unchecklist all client', () => {
					BusinessAdminObject.unChecklistAll();
				});
			});
		});
	});

	context('Given I am on the business admin page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			BusinessAdminObject.moveToBusinessAdmin();
			BusinessAdminObject.clickTabClientList();
		});

		context('When I am click Client List tab', () => {
			context('AND I click show instruction', () => {
				it('Then I successfully see instruction', () => {
					BusinessAdminObject.showInstruction();
				});
			});
		});
	});
});
