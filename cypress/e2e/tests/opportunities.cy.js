import Opportunities from '../../lib/opportunities.cy';
import User from '../../lib/user.cy';

describe('User access opportunities module', function () {
	const userObject = new User();
	const opportunitiesObject = new Opportunities();

	context('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
		});

		it('Then I see opportunities page', () => {
			cy.screenshot('opportunities page');
		});
	});

	context('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.searchOpportunities('Test');
		});

		context('When I search opportunities', () => {
			it('Then I see result opportunities', () => {
				cy.screenshot('result search opportunities');
			});
		});
	});

	context('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.clickBtnFilter();
			opportunitiesObject.clickBtnClearFilter();
			opportunitiesObject.clickBtnShowResult();
		});

		context(
			'When I click filter and I click clear filter & show results',
			() => {
				it('Then I see all status all opportunities', () => {
					cy.screenshot('clear filter');
				});
			}
		);
	});

	context('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.clickBtnFilter();
			opportunitiesObject.removePendingOpportunity();
			opportunitiesObject.removeCompletedOpportunity();
			opportunitiesObject.removeDeclinedOpportunity();
			opportunitiesObject.removeCancelledOpportunity();
			opportunitiesObject.removeOnHold();
			opportunitiesObject.clickBtnShowResult();
		});

		context('When I check in progress and click show results button', () => {
			it('Then I see in progress status opportunities', () => {
				cy.screenshot('in progress opportunities');
			});
		});
	});

	context('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.clickBtnFilter();
			opportunitiesObject.removeInProgress();
			opportunitiesObject.removeCompletedOpportunity();
			opportunitiesObject.removeDeclinedOpportunity();
			opportunitiesObject.removeCancelledOpportunity();
			opportunitiesObject.removeOnHold();
			opportunitiesObject.clickBtnShowResult();
		});

		context(
			'When I check pending opportunity and click show results button',
			() => {
				it('Then I see pending opportunity status opportunities', () => {
					cy.screenshot('pending opportunity opportunities');
				});
			}
		);
	});

	context('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.clickBtnFilter();
			opportunitiesObject.removeInProgress();
			opportunitiesObject.removePendingOpportunity();
			opportunitiesObject.removeDeclinedOpportunity();
			opportunitiesObject.removeCancelledOpportunity();
			opportunitiesObject.removeOnHold();
			opportunitiesObject.clickBtnShowResult();
		});

		context(
			'When I check completed opportunity and click show results button',
			() => {
				it('Then I see completed opportunity status opportunities', () => {
					cy.screenshot('completed opportunity opportunities');
				});
			}
		);
	});

	context('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.clickBtnFilter();
			opportunitiesObject.removeInProgress();
			opportunitiesObject.removePendingOpportunity();
			opportunitiesObject.removeCompletedOpportunity();
			opportunitiesObject.removeCancelledOpportunity();
			opportunitiesObject.removeOnHold();
			opportunitiesObject.clickBtnShowResult();
		});

		context(
			'When I check declined opportunity and click show results button',
			() => {
				it('Then I see declined opportunity status opportunities', () => {
					cy.screenshot('declined opportunity opportunities');
				});
			}
		);
	});

	context('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.clickBtnFilter();
			opportunitiesObject.removeInProgress();
			opportunitiesObject.removePendingOpportunity();
			opportunitiesObject.removeCompletedOpportunity();
			opportunitiesObject.removeDeclinedOpportunity();
			opportunitiesObject.removeOnHold();
			opportunitiesObject.clickBtnShowResult();
		});

		context(
			'When I check cancelled opportunity and click show results button',
			() => {
				it('Then I see cancelled opportunity status opportunities', () => {
					cy.screenshot('cancelled opportunity opportunities');
				});
			}
		);
	});

	context('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.clickBtnFilter();
			opportunitiesObject.removeInProgress();
			opportunitiesObject.removePendingOpportunity();
			opportunitiesObject.removeCompletedOpportunity();
			opportunitiesObject.removeCancelledOpportunity();
			opportunitiesObject.removeDeclinedOpportunity();
			opportunitiesObject.clickBtnShowResult();
		});

		context(
			'When I check on hold opportunity and click show results button',
			() => {
				it('Then I see on hold opportunity status opportunities', () => {
					cy.screenshot('on hold opportunity opportunities');
				});
			}
		);
	});

	context('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.clickBtnFilter();
			opportunitiesObject.clickBtnClearFilter();
			opportunitiesObject.checkExpired();
			opportunitiesObject.clickBtnShowResult();
		});

		context('When I check expired and click show results button', () => {
			it('Then I see expired opportunity status opportunities', () => {
				cy.screenshot('expired opportunity opportunities');
			});
		});
	});

	context('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.detailOpportunities();
		});

		context('When I click opportunities', () => {
			it('Then I will be redirected to detail opportunities page', () => {
				cy.screenshot('detail opportunity');
			});
		});
	});

	context.skip('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.clickDecline();
			opportunitiesObject.inputDeclineMessage('Lorem ipsum dolor');
			opportunitiesObject.clickSendDecline();
		});

		context(
			'When I click decline and fill the form and click on the send button',
			() => {
				it('Then I successfully declined opportunity', () => {
					cy.screenshot('success declined opportunities');
				});
			}
		);
	});

	context.skip('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.clickSubscribe();
			opportunitiesObject.clickBtnSubscribe();
			opportunitiesObject.clickTermsOfUse();
		});

		context('When I click subscribe and click on the Terms of use', () => {
			it('Then I will be redirected terms of use page', () => {
				cy.screenshot('terms of use page');
			});
		});
	});

	context.skip('Given I access opportunities page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
			opportunitiesObject.moveToOpportunities();
			opportunitiesObject.clickSubscribe();
			opportunitiesObject.clickBtnSubscribe();
			opportunitiesObject.clickPrivacyPolicy();
		});

		context('When I click subscribe and click on the privacy policy', () => {
			it('Then I will be redirected privacy policy page', () => {
				cy.screenshot('privacy policy page');
			});
		});
	});
});
