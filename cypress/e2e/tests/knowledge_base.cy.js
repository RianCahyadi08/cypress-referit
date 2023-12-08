import KnowledgeBase from '../../lib/knowledge_base.cy';
import User from '../../lib/user.cy';

describe('User access knowledge base module', function () {
	const userObject = new User();
	const knowledgeBaseObject = new KnowledgeBase();

	context('Given I dashboard page', () => {
		beforeEach(() => {
			cy.visit('https://app-dev.referit.co/login');
			userObject.login('rian.cahyadi@flexidev.co', 'P@55word');
		});

		context('When I click contact module', () => {
			it('Then I will be redirected to contact new tab page', () => {
				knowledgeBaseObject.clickKnowledgeBaseModule();
				cy.screenshot('knowledge base page');
			});
		});
	});
});
