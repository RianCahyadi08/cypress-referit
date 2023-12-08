import { beforeEach } from 'mocha';
import Dashboard from '../../lib/dashboard.cy';
import User from '../../lib/user.cy';

describe('User access dashboard module', function () {
	const userObject = new User();
	const dashboardObject = new Dashboard();

	context('Given I am on the dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});

		context('When I click on the dashboard page', () => {
			beforeEach(() => {
				dashboardObject.moveToDashboard();
			});

			it('Then I can see dashboard page', () => {
				cy.screenshot('dashboard page');
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click view all my opportunities', () => {
			beforeEach(() => {
				dashboardObject.moveToDashboard();
				dashboardObject.viewAllMyOpportunities();
			});

			it('Then I can see opportunities page', () => {
				cy.screenshot('opportunities page');
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click view all in my referrals', () => {
			beforeEach(() => {
				dashboardObject.moveToDashboard();
				dashboardObject.viewAllMyReferrals();
			});

			it('Then I can see referrals page', () => {
				cy.screenshot('referrals page');
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click view all my rewards', () => {
			beforeEach(() => {
				dashboardObject.moveToDashboard();
				dashboardObject.viewAllMyRewards();
			});

			it('Then I can see my rewards page', () => {
				cy.screenshot('rewards page');
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click Go to welcome walkthrough', () => {
			beforeEach(() => {
				dashboardObject.moveToDashboard();
				dashboardObject.goToWelcomeWalkthrough();
			});

			it('Then I can see onboarding page', () => {
				cy.screenshot('onboarding page');
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click Go to welcome walkthrough', () => {
			beforeEach(() => {
				dashboardObject.moveToDashboard();
				dashboardObject.goToWelcomeWalkthrough();
			});

			context('And I click make a referral on boarding', () => {
				it('Then I can see the video changes', () => {
					dashboardObject.clickMakeAReferral();
					cy.screenshot('make a referral');
				});
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click Go to welcome walkthrough', () => {
			beforeEach(() => {
				dashboardObject.moveToDashboard();
				dashboardObject.goToWelcomeWalkthrough();
			});
			context('And I click make a referral on boarding', () => {
				it('Then I can see the video changes', () => {
					dashboardObject.clickMakeAReferral();
					cy.screenshot('make a referral');
				});
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click Go to welcome walkthrough', () => {
			beforeEach(() => {
				dashboardObject.moveToDashboard();
				dashboardObject.goToWelcomeWalkthrough();
			});

			context('And I click redeem rewards on boarding', () => {
				it('Then I can see the video changes', () => {
					dashboardObject.clickRedeemRewards();
					cy.screenshot('redeem rewards');
				});
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I clicked new referral button', () => {
			beforeEach(() => {
				dashboardObject.clickBtnNewReferral();
			});
			context('And I completed all the fields', () => {
				it('Then I successfully created new referral', () => {
					dashboardObject.inputReferralTitle('Test Referral Title Rian 9');
					dashboardObject.inputNameReffering('Rian');
					dashboardObject.inputEmailAddressReffering(
						'rian.cahyadi@flexidev.co'
					);
					dashboardObject.inputNameToClient('Rian Client');
					dashboardObject.inputEmailToClient('ryancahyadi11@gmail.com');
					dashboardObject.inputMessageToClient('Lorem ipsum dolor sit amet');
					// dashboardObject.clickBtnSendNewReferral();
					cy.screenshot('create new referral');
				});
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click on the notification in the top right corner', () => {
			it('Then I can see the notification', () => {
				dashboardObject.clickNotification();
				cy.screenshot('notification');
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click on the notification in the top right corner', () => {
			context('And I click on the view button', () => {
				it('Then I can see detail the notification', () => {
					dashboardObject.clickNotification();
					dashboardObject.clickViewNotification();
					cy.screenshot('detail notification');
				});
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I logout', () => {
			it('Then I will be redirected to login page', () => {
				dashboardObject.logout();
				cy.screenshot('logout');
			});
		});
	});
});
