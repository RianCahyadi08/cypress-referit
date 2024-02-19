import Login from '../../pom/login_objects.cy';
import Rewards from '../../pom/rewards.cy';

describe('User access rewards module', function () {
	const loginObject = new Login();
	const rewardsObject = new Rewards();

	context('Given I am on the rewards page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			rewardsObject.clickRewardsModule();
		});

		context('When I click rewards module', () => {
			it('Then I will be redirected to contact new tab page', () => {
				// cy.screenshot('rewards page');
			});
		});
	});

	context('Given I am on the rewards page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			rewardsObject.clickRewardsModule();
			rewardsObject.viewHistory();
		});

		context('When I click history button', () => {
			it('Then I can see history detail', () => {
				// cy.screenshot('rewards page');
			});
		});
	});

	context('Given I am on the rewards detail page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			rewardsObject.clickRewardsModule();
			rewardsObject.viewHistory();
			rewardsObject.showMore();
		});

		context('When I click show more button', () => {
			it('Then I can see all reward data', () => {
				// cy.screenshot('rewards page');
			});
		});
	});

	context('Given I am on the rewards page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			rewardsObject.clickRewardsModule();
			rewardsObject.viewRewards();
		});

		context('When I click view reward button', () => {
			it('Then I can see detail reward data', () => {
				// cy.screenshot('rewards page');
			});
		});
	});

	context('Given I am on the rewards detail page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			rewardsObject.clickRewardsModule();
			rewardsObject.viewRewards();
			rewardsObject.giftYourToken('ryancahyadi11@gmail.com', '10');
		});

		context('When I give a gift', () => {
			it('Then give a gift successfully', () => {
				// cy.screenshot('rewards page');
			});
		});
	});

	context.only('Given I am on the rewards detail page', () => {
		before(() => {
			cy.visit('https://app-dev.referit.co/login');
			loginObject.setEmail('rian.cahyadi@flexidev.co');
			loginObject.setPassword('P@55word12');
			loginObject.clickBtnLogin();
			rewardsObject.clickRewardsModule();
			rewardsObject.viewRewards();
			rewardsObject.donateYourBusiness('1');
		});

		context('When I donate', () => {
			it('Then donate successfully', () => {
				// cy.screenshot('rewards page');
			});
		});
	});
});
