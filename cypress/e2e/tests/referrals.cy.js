import Login from '../../pom/login_objects.cy';
import Referrals from '../../pom/referral_object.cy';

describe('User access referrals module', function () {
	const loginObject = new Login();
	const referralsObject = new Referrals();

	context('Given I am on the referrals page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			referralsObject.clickReferralsModule();
		});

		context('When I click on the referrals page', () => {
			it('Then I can see referrals page', () => {
				cy.screenshot('referrals page');
			});
		});
	});

	context('Given I am on the referrals page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			referralsObject.clickReferralsModule();
			referralsObject.searchReferrals('tes');
		});
		context('When I fill search field', () => {
			it('Then I can see search result referral', () => {
				cy.screenshot('search result referrals');
			});
		});
	});

	context('Given I am on the referrals page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			referralsObject.clickReferralsModule();
			referralsObject.clickBtnFilter();
			referralsObject.clearFilter();
			referralsObject.clickBtnShowResult();
		});
		context('When I click filter button', () => {
			context('And I clear filter and click show results', () => {
				it('Then I can see result all referral', () => {
					cy.screenshot('clear filter referrals');
				});
			});
		});
	});

	context('Given I am on the referrals page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			referralsObject.clickReferralsModule();
			referralsObject.clickBtnFilter();
			referralsObject.clearFilter();
			referralsObject.filterAccepted();
			referralsObject.clickBtnShowResult();
		});
		context('When I click filter button', () => {
			context('And I check accepted and click show results', () => {
				it('Then I can see result accepted referral', () => {
					cy.screenshot('accepted filter referrals');
				});
			});
		});
	});

	context('Given I am on the referrals page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			referralsObject.clickReferralsModule();
			referralsObject.clickBtnFilter();
			referralsObject.clearFilter();
			referralsObject.filterReferralSent();
			referralsObject.clickBtnShowResult();
		});
		context('When I click filter button', () => {
			context('And I check referral sent and click show results', () => {
				it('Then I can see result accepted referral', () => {
					cy.screenshot('referral sent filter referrals');
				});
			});
		});
	});

	context('Given I am on the referrals page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			referralsObject.clickReferralsModule();
			referralsObject.clickBtnFilter();
			referralsObject.clearFilter();
			referralsObject.filterDeclined();
			referralsObject.clickBtnShowResult();
		});
		context('When I click filter button', () => {
			context('And I check declined and click show results', () => {
				it('Then I can see result accepted referral', () => {
					cy.screenshot('referral declined filter referrals');
				});
			});
		});
	});

	context('Given I am on the referrals page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			referralsObject.clickReferralsModule();
			referralsObject.clickBtnFilter();
			referralsObject.clearFilter();
			referralsObject.filterExpired();
			referralsObject.clickBtnShowResult();
		});
		context('When I click filter button', () => {
			context('And I check expired and click show results', () => {
				it('Then I can see result expired referral', () => {
					cy.screenshot('referral expired filter referrals');
				});
			});
		});
	});

	context('Given I am on the referrals page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			referralsObject.clickReferralsModule();
			referralsObject.clickDetailMyReferral();
		});
		context('When I click detail one referral', () => {
			it('Then I can see detail referral', () => {
				// cy.screenshot('detail referrals');
			});
		});
	});
});
