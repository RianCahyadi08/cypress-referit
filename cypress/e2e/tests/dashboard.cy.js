import Login from '../../pom/login_objects.cy';
import Dashboard from '../../pom/dashboard_object.cy';
import { beforeEach } from 'mocha';

describe('User access dashboard module', function () {
	const loginObject = new Login();
	const dashboardObject = new Dashboard();

	beforeEach(() => {
		cy.visit('https://app-dev.referit.co/login');
		loginObject.setEmail('rian.cahyadi+01@flexidev.co');
		loginObject.setPassword('P@55word');
		loginObject.clickBtnLogin();
	});

	context('Given I am on the dashboard page', () => {
		context('When I click on the dashboard page', () => {
			it('Then I can see dashboard page', () => {
				dashboardObject.clickDashboardModule();
				// cy.screenshot('dashboard page');
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		context('When I click view all my opportunities', () => {
			it('Then I can see opportunities page', () => {
				dashboardObject.clickDashboardModule();
				dashboardObject.viewAllMyOpportunities();
				// cy.screenshot('opportunities page');
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		context('When I click view all in my referrals', () => {
			it('Then I can see referrals page', () => {
				dashboardObject.clickDashboardModule();
				dashboardObject.viewAllMyReferrals();
				// cy.screenshot('referrals page');
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		context('When I click view all my rewards', () => {
			it('Then I can see my rewards page', () => {
				dashboardObject.clickDashboardModule();
				dashboardObject.viewAllMyRewards();
				// cy.screenshot('rewards page');
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		context('When I click Go to welcome walkthrough', () => {
			it('Then I can see onboarding page', () => {
				// dashboardObject.clickDashboardModule();
				dashboardObject.clickGoToWelcomeWalkthrough();
				// cy.screenshot('onboarding page');
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		context('When I click Go to welcome walkthrough', () => {
			context('And I click make a referral on boarding', () => {
				it('Then I can see the video changes', () => {
					dashboardObject.clickDashboardModule();
					dashboardObject.clickGoToWelcomeWalkthrough();
					dashboardObject.clickMakeAReferral();
					// cy.screenshot('make a referral');
				});
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		context('When I click Go to welcome walkthrough', () => {
			context('And I click redeem rewards on boarding', () => {
				it('Then I can see the video changes', () => {
					dashboardObject.clickDashboardModule();
					dashboardObject.clickGoToWelcomeWalkthrough();
					dashboardObject.clickRedeemRewards();
					// cy.screenshot('redeem rewards');
				});
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		context('When I clicked new referral button', () => {
			context('And I completed all the fields', () => {
				it('Then I successfully created new referral', () => {
					dashboardObject.clickBtnNewReferral();
					dashboardObject.inputNameReffering('Rian');
					dashboardObject.inputEmailAddressReffering(
						'rian.cahyadi@flexidev.co'
					);
					dashboardObject.inputNameToClient('Rian Client');
					dashboardObject.inputEmailToClient('ryancahyadi11@gmail.com');
					dashboardObject.inputReferralTitle('Test Referral Title Rian 1');
					dashboardObject.inputMessageToClient('Lorem ipsum dolor sit amet');
					// dashboardObject.clickBtnSendNewReferral();
					// cy.screenshot('create new referral');
				});
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		context('When I click on the notification in the top right corner', () => {
			it('Then I can see the notification', () => {
				dashboardObject.clickNotification();
				// cy.screenshot('notification');
			});
		});
	});

	// should set condition
	context.only('Given I am on the dashboard page', () => {
		context('When I click on the notification in the top right corner', () => {
			context('And I click on the view button', () => {
				it('Then I can see detail the notification', () => {
					dashboardObject.clickNotification();
					dashboardObject.clickViewNotification();
					// cy.screenshot('detail notification');
				});
			});
		});
	});

	context('Given I am on the dashboard page', () => {
		context('When I logout', () => {
			it('Then I will be redirected to login page', () => {
				dashboardObject.logout();
				// cy.screenshot('logout');
			});
		});
	});
});
