class BusinessAdmin {
	moveToBusinessAdmin() {
		cy.contains('Business Admin').click();
		cy.contains('Admin').should('be.visible');
		// cy.wait(1000);
	}

	clickTabRewardsSettings() {
		cy.contains('Rewards Settings').click();
		cy.contains('Rewards program').should('be.visible');
		// cy.wait(1000);
	}

	clickNewCharityButton() {
		cy.contains('New charity').click();
		cy.contains('Add New Charity').should('be.visible');
		// cy.wait(1000);
	}

	inputCharityName(value) {
		cy.get('[maxlength=100]').clear();
		cy.get('[maxlength=100]').type(value);
		cy.get('[maxlength=100]').should('have.value', value);
	}

	inputDescription(value) {
		cy.get('[maxlength=300]').clear();
		cy.get('[maxlength=300]').type(value);
		cy.get('[maxlength=300]').should('have.value', value);
	}

	clickBtnSave() {
		cy.get(
			'button[class*="text-font-16 font-weight-400 btn-txt-transform-none bg-main-pink-1 white--text px-5 mb-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
		).click();
		cy.get(
			'div[class*="d-flex flex-wrap mb-3 v-card v-card--flat v-sheet theme--dark rounded-lg background-primary"]'
		).should('be.visible');
	}

	clickIconEdit() {
		cy.get('i[class*="v-icon notranslate mdi mdi-pencil theme--dark"]').click();
		cy.contains('Edit Charity').should('be.visible');
	}

	deleteCharity() {
		cy.get(
			'i[class*="v-icon notranslate mdi mdi-trash-can theme--dark"]'
		).click();
		cy.contains('Are you sure you want to delete this item?').should(
			'be.visible'
		);
		cy.contains('Confirm').click();
	}
}

export default BusinessAdmin;
