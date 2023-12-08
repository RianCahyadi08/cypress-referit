class KnowledgeBase {
	clickKnowledgeBaseModule() {
		cy.contains('Knowledge Base')
			.invoke('removeAttr', 'target')
			.click({ multiple: true, force: true });
		cy.url().should('include', 'https://referit.co/knowledge-base/');
	}
}

export default KnowledgeBase;
