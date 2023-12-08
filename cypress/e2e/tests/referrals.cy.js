import { beforeEach } from 'mocha';
import User from '../../lib/user.cy';
import Referrals from '../../lib/referrals.cy';

describe('User access referrals module', function () {
	const userObject = new User();
	const referralsObject = new Referrals();

	context('Given I am on the referrals page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});

		context('When I click on the referrals page', () => {
			beforeEach(() => {
				referralsObject.moveToReferrals();
			});

			it('Then I can see referrals page', () => {
				cy.screenshot('referrals page');
			});
		});
	});

	context('Given I am on the referrals page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I fill search field', () => {
			beforeEach(() => {
				referralsObject.moveToReferrals();
				referralsObject.searchReferrals('Provider');
			});

			it('Then I can see search result referral', () => {
				cy.screenshot('search result referrals');
			});
		});
	});

	context('Given I am on the referrals page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click filter button', () => {
			beforeEach(() => {
				referralsObject.moveToReferrals();
				referralsObject.clickBtnFilter();
				referralsObject.clearFilter();
				referralsObject.clickBtnShowResult();
			});

			context('And I clear filter and click show results', () => {
				it('Then I can see result all referral', () => {
					cy.screenshot('clear filter referrals');
				});
			});
		});
	});

	context('Given I am on the referrals page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click filter button', () => {
			beforeEach(() => {
				referralsObject.moveToReferrals();
				referralsObject.clickBtnFilter();
				referralsObject.filterReferralSent();
				referralsObject.filterDeclined();
				referralsObject.clickBtnShowResult();
			});

			context('And I check accepted and click show results', () => {
				it('Then I can see result accepted referral', () => {
					cy.screenshot('accepted filter referrals');
				});
			});
		});
	});

	context('Given I am on the referrals page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click filter button', () => {
			beforeEach(() => {
				referralsObject.moveToReferrals();
				referralsObject.clickBtnFilter();
				referralsObject.filterAccepted();
				referralsObject.filterDeclined();
				referralsObject.clickBtnShowResult();
			});

			context('And I check referral sent and click show results', () => {
				it('Then I can see result accepted referral', () => {
					cy.screenshot('referral sent filter referrals');
				});
			});
		});
	});

	context('Given I am on the referrals page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click filter button', () => {
			beforeEach(() => {
				referralsObject.moveToReferrals();
				referralsObject.clickBtnFilter();
				referralsObject.filterAccepted();
				referralsObject.filterReferralSent();
				referralsObject.clickBtnShowResult();
			});

			context('And I check declined and click show results', () => {
				it('Then I can see result accepted referral', () => {
					cy.screenshot('referral declined filter referrals');
				});
			});
		});
	});

	context('Given I am on the referrals page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click filter button', () => {
			beforeEach(() => {
				referralsObject.moveToReferrals();
				referralsObject.clickBtnFilter();
				referralsObject.filterAccepted();
				referralsObject.filterReferralSent();
				referralsObject.filterDeclined();
				referralsObject.filterExpired();
				referralsObject.clickBtnShowResult();
			});

			context('And I check expired and click show results', () => {
				it('Then I can see result expired referral', () => {
					cy.screenshot('referral expired filter referrals');
				});
			});
		});
	});

	context('Given I am on the referrals page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});
		context('When I click detail one referral', () => {
			beforeEach(() => {
				referralsObject.moveToReferrals();
				referralsObject.clickDetailMyReferral();
			});

			it('Then I can see detail referral', () => {
				cy.screenshot('detail referrals');
			});
		});
	});
});
