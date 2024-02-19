class BusinessAdmin {
	length;
	moveToBusinessAdmin() {
		cy.contains('Business Admin').click();
		cy.contains('Admin').should('be.visible');
		// cy.wait(1000);
	}

	clickTabRewardsSettings() {
		cy.contains('Rewards Settings').click();
		cy.contains('Rewards program').should('be.visible');
		cy.wait(1000);
	}

	clickBtnSaveHeader() {
		cy.get(
			'button[class*="text-decoration-none white--text btn-txt-transform-none mr-2 v-btn v-btn--has-bg v-btn--rounded theme--dark elevation-0 v-size--x-small"]'
		).click();
	}

	clickBtnConfirm() {
		cy.contains('Confirm').click();
		cy.wait(1000);
	}

	// Set reward program
	turnOnOfRewardProgram() {
		cy.xpath(
			'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[1]/div/label/span'
		)
			// .first()
			.invoke('text')
			.then(($buttonToggle) => {
				if ($buttonToggle == 'ON') {
					cy.log('Button nya ON');
					cy.xpath(
						'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[1]/div/label/span'
					).click({
						multiple: true,
					});
					this.clickBtnSaveHeader();
					this.clickBtnConfirm();
				} else {
					cy.log('Button nya OFF');
					cy.xpath(
						'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[1]/div/label/div'
					).click({ force: true });
					this.selectCurrency('AED');
					this.inputTokenRewardProgram('5');
					this.clickOpportunityValue();
					this.inputPercentageOpportunity('50');
					this.inputTokenValue('2');
					this.clickBtnSaveHeader();
					this.clickBtnConfirm();
					cy.wait(1000);
				}
			});
	}

	selectCurrency(value) {
		cy.get('input[autofocus="autofocus"]').click({ force: true });
		cy.get('input[autofocus="autofocus"]').type(value);
		cy.get('input[autofocus="autofocus"]').type('{enter}');
	}

	inputTokenRewardProgram(value) {
		cy.xpath(
			'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[2]/div/form/div[3]/div[2]/div[2]/div/div[1]/div/input'
		).clear();
		cy.xpath(
			'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[2]/div/form/div[3]/div[2]/div[2]/div/div[1]/div/input'
		).type(value);
		cy.xpath(
			'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[2]/div/form/div[3]/div[2]/div[2]/div/div[1]/div/input'
		).should('have.value', value);
	}

	clickOpportunityValue() {
		cy.contains('% of opportunity value').click();
	}

	clickTokenValue() {
		cy.xpath(
			'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[2]/div/form/div[6]/div/div/div[1]/div/div[2]/label'
		).click();
	}

	inputPercentageOpportunity(value) {
		cy.xpath(
			'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[2]/div/form/div[8]/div[2]/div/div[1]/div/input'
		).clear();
		cy.xpath(
			'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[2]/div/form/div[8]/div[2]/div/div[1]/div/input'
		).type(value);
		cy.xpath(
			'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[2]/div/form/div[8]/div[2]/div/div[1]/div/input'
		).should('have.value', value);
	}

	inputTokenValue(value) {
		cy.xpath(
			'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[2]/div/form/div[11]/div[2]/div/div[1]/div/input'
		).clear();
		cy.xpath(
			'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[2]/div/form/div[11]/div[2]/div/div[1]/div/input'
		).type(value);
		cy.xpath(
			'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[1]/div[2]/div/form/div[11]/div[2]/div/div[1]/div/input'
		).should('have.value', value);
	}
	// End set reward program

	// charity
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
		).click({ multiple: true });
		cy.get(
			'div[class*="d-flex flex-wrap mb-3 v-card v-card--flat v-sheet theme--dark rounded-lg background-primary"]'
		).should('be.visible');
		cy.wait(1000);
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
		cy.wait(1000);
	}
	// End Charity

	// Reward
	clickBtnNewReward() {
		cy.contains('New reward').click();
		cy.contains('Add New Reward').should('be.visible');
	}

	uploadImageReward(value) {
		cy.get('input[type=file]').selectFile(value, { force: true });
		cy.wait(1000);
		cy.get(
			'button[class*="text-decoration-none white--text btn-txt-transform-none bg-main2 my-auto mt-1 ml-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
		).click();
		cy.wait(1000);
	}

	inputRewardTitle(value) {
		cy.get('input[maxlength="100"]').clear();
		cy.get('input[maxlength="100"]').type(value);
		cy.get('input[maxlength="100"]').should('have.value', value);
	}

	inputRewardTitle(value) {
		cy.get('input[maxlength="100"]').clear();
		cy.get('input[maxlength="100"]').type(value);
		cy.get('input[maxlength="100"]').should('have.value', value);
	}

	inputDescriptionRewardTitle(value) {
		cy.get('textarea[maxlength="300"]').clear();
		cy.get('textarea[maxlength="300"]').type(value);
		cy.get('textarea[maxlength="300"]').should('have.value', value);
	}

	inputTokenAmountRequired(value) {
		cy.get('input[maxlength="8"]').clear();
		cy.get('input[maxlength="8"]').type(value);
		cy.get('input[maxlength="8"]').should('have.value', value);
	}

	deleteReward() {
		cy.get(
			'div[class*="d-flex flex-wrap mb-3 v-card v-card--flat v-sheet theme--dark rounded-lg background-primary"]'
		).then(($value) => {
			length = $value.length;
			if (length > 0) {
				cy.log('Bisa melakukan delete');
				cy.get('i[class*="v-icon notranslate mdi mdi-trash-can theme--dark"]')
					.first()
					.click();
				cy.contains('Confirm').click();
				cy.wait(1000);
			} else {
				cy.log('Belum ada reward');
			}
		});
	}

	updateReward(reward, description, token) {
		cy.get(
			'div[class*="d-flex flex-wrap mb-3 v-card v-card--flat v-sheet theme--dark rounded-lg background-primary"]'
		).then(($value) => {
			length = $value.length;
			if (length > 0) {
				cy.get('i[class*="v-icon notranslate mdi mdi-pencil theme--dark"]')
					.first()
					.click();
				this.inputRewardTitle(reward);
				this.inputDescriptionRewardTitle(description);
				this.inputTokenAmountRequired(token);
				this.clickBtnSave();
			} else {
				cy.log('Belum ada reward');
			}
		});
	}

	detailReward() {
		cy.get(
			'div[class*="d-flex flex-wrap mb-3 v-card v-card--flat v-sheet theme--dark rounded-lg background-primary"]'
		).then(($value) => {
			length = $value.length;
			if (length > 0) {
				cy.get(
					'button[class*="text-decoration-none white--text btn-txt-transform-none mb-1 v-btn v-btn--outlined v-btn--rounded theme--dark elevation-0 v-size--x-small"]'
				).click();
			} else {
				cy.log('Belum ada reward');
			}
		});
	}

	onOffReward() {
		cy.xpath(
			'/html/body/div/div/div/div/main/div/div/div[2]/div/div/div[3]/div[2]/div/div[2]/div[4]/label/span'
		)
			// .first()
			.invoke('text')
			.then(($buttonToggle) => {
				if ($buttonToggle == 'ON') {
					cy.get('span[class*="v-switch-label v-left"]').last().click({
						multiple: true,
						force: true,
					});
					cy.contains('Confirm').click();
					cy.wait(1000);
					cy.get('span[class*="v-switch-label v-right"]').should('be.visible');
					cy.log('Button nya ON');
				} else {
					cy.get('.v-switch-button')
						.last()
						.click({ multiple: true, force: true });
					cy.contains('Confirm').click();
					cy.wait(1000);
					cy.get('span[class*="v-switch-label v-left"]').should('be.visible');
					cy.log('Button nya OFF');
				}
			});
	}
	// End rewards

	clickTabBusinessProfile() {
		cy.contains('Business Profile').click();
		cy.contains('Business Profile').should('be.visible');
		cy.wait(1000);
	}

	clickWebLink() {
		cy.get(
			'a[class*="text-decoration-none btn-txt-transform-none mb-3 text-overflow-handle max-w-100 v-btn v-btn--outlined v-btn--rounded theme--dark elevation-0 v-size--small"]'
		)
			.invoke('removeAttr', 'target')
			.click({ multiple: true, force: true });
		cy.wait(1000);
	}

	clickLinkedlnLink() {
		cy.get(
			'i[class*="v-icon notranslate mdi mdi-linkedin theme--dark white--text"]'
		).click();
		cy.wait(1000);
	}

	clickFacebookLink() {
		cy.get(
			'i[class*="v-icon notranslate mdi mdi-facebook theme--dark white--text"]'
		).click();
		cy.wait(1000);
	}

	clickInstagramLink() {
		cy.get(
			'i[class*="v-icon notranslate mdi mdi-instagram theme--dark white--text"]'
		).click();
		cy.wait(1000);
	}

	detailOwner() {
		cy.get('div[class*="my-auto white--text text-overflow-handle"]').click();
		cy.wait(1000);
	}

	// Edit Business Profile
	clickEditBusinessProfile() {
		cy.get(
			'a[class*="white--text btn-txt-transform-none mr-2 v-btn v-btn--outlined v-btn--rounded v-btn--router theme--dark elevation-0 v-size--x-small"]'
		).click();
		cy.url('include', 'https://app-dev.referit.co/business/admin/edit');
	}

	uploadImageBusinessProfile(value) {
		// cy.get('input[type=file]').selectFile(value);
		cy.xpath(
			'/html/body/div/div/div/div[1]/main/div/div/div[2]/div/div[1]/div[1]/form/div[1]/div[1]/input'
		).selectFile(value, { force: true });
		cy.wait(1000);
		cy.get(
			'button[class*="text-decoration-none white--text btn-txt-transform-none bg-main2 my-auto mt-1 ml-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
		).click();
		cy.wait(1000);
	}

	inputBusinessName(value) {
		cy.get('#business-name').clear();
		cy.get('#business-name').type(value);
		cy.get('#business-name').should('have.value', value);
	}

	selectIndustry(value) {
		cy.get('#industry').click();
		cy.get('#industry').type(value, { force: true });
		cy.get('#industry').type('{enter}', { force: true });
	}

	inputMobilePhone(value) {
		cy.get('input[name="telephone"]').clear();
		cy.get('input[name="telephone"]').type(value);
		cy.get('input[name="telephone"]').should('have.value', value);
	}

	inputBusinessAddress(value) {
		cy.get('#business-address').clear();
		cy.get('#business-address').type(value);
		cy.get('#business-address').should('have.value', value);
	}

	inputEmailAddress(value) {
		cy.get('#email-address').clear();
		cy.get('#email-address').type(value);
		cy.get('#email-address').should('have.value', value);
	}

	inputWebsite(value) {
		cy.get('#website').clear();
		cy.get('#website').type(value);
		cy.get('#website').should('have.value', value);
	}

	inputDescriptionBusinessProfile(value) {
		cy.get('#description').clear();
		cy.get('#description').type(value);
		cy.get('#description').should('have.value', value);
	}

	inputLinkedlnUrl(value) {
		cy.get('#linkedInUrl').clear();
		cy.get('#linkedInUrl').type(value);
		cy.get('#linkedInUrl').should('have.value', value);
	}

	inputFacebookUrl(value) {
		cy.get('#facebookUrl').clear();
		cy.get('#facebookUrl').type(value);
		cy.get('#facebookUrl').should('have.value', value);
	}

	inputInstagramUrl(value) {
		cy.get('#instagramUrl').clear();
		cy.get('#instagramUrl').type(value);
		cy.get('#instagramUrl').should('have.value', value);
	}

	clickBtnSaveBusinessProfile() {
		cy.get(
			'button[class*="text-decoration-none white--text btn-txt-transform-none button-new my-auto mr-8 v-btn v-btn--has-bg v-btn--rounded theme--dark elevation-0 v-size--x-small"]'
		).click();
	}

	// Download CSV
	downloadCSV() {
		cy.contains('Invite client').click();
		cy.get(
			'div[class*="v-dialog v-dialog--active v-dialog--persistent"]'
		).should('have.visible');
		cy.contains('Send Bulk Invite').click();
		cy.get(
			'div[class*="pt-4 pb-2 filter-rounded bg-bone-white rounded-lg v-card v-sheet theme--dark"]'
		).should('have.visible');
		cy.contains('Download CSV Template').click();
		cy.wait(1000);
	}

	// Upload CSV
	uploadCSV(value) {
		cy.contains('Invite client').click();
		cy.get(
			'div[class*="v-dialog v-dialog--active v-dialog--persistent"]'
		).should('have.visible');
		cy.contains('Send Bulk Invite').click();
		cy.get(
			'div[class*="pt-4 pb-2 filter-rounded bg-bone-white rounded-lg v-card v-sheet theme--dark"]'
		).should('have.visible');
		cy.get('input[type=file]').last().selectFile(value, { force: true });
		cy.wait(1000);
		cy.contains('Upload CSV File').click();
		cy.get(
			'button[class*="text-font-14 font-weight-400 btn-txt-transform-none bg-main-pink-1 white--text mt-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
		).should('have.visible');
		cy.get(
			'button[class*="text-font-14 font-weight-400 btn-txt-transform-none bg-main-pink-1 white--text mt-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
		).click();
		cy.wait(3000);
	}

	// Delete bulk invite client
	deleteBulkInviteClient(value) {
		cy.contains('Invite client').click();
		cy.get(
			'div[class*="v-dialog v-dialog--active v-dialog--persistent"]'
		).should('have.visible');
		cy.contains('Send Bulk Invite').click();
		cy.get(
			'div[class*="pt-4 pb-2 filter-rounded bg-bone-white rounded-lg v-card v-sheet theme--dark"]'
		).should('have.visible');
		cy.get('input[type=file]').last().selectFile(value, { force: true });
		cy.wait(1000);
		cy.contains('Upload CSV File').click();
		cy.get(
			'button[class*="text-font-14 font-weight-400 btn-txt-transform-none bg-main-pink-1 white--text mt-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
		).should('have.visible');
		cy.get(
			'button[class*="v-icon notranslate v-icon--link mdi mdi-trash-can theme--light"]'
		).click();
		cy.get('div[class*="pb-2 v-card v-sheet theme--light"]').should(
			'have.visible'
		);
		cy.wait(1000);
		cy.get(
			'button[class*="text-decoration-none white--text btn-txt-transform-none bg-main2 my-auto mt-1 ml-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
		).click();
		cy.wait(1000);
	}

	// Update bulk invite client
	updateBulkInviteClient(value, firstName, lastName, email) {
		cy.contains('Invite client').click();
		cy.get(
			'div[class*="v-dialog v-dialog--active v-dialog--persistent"]'
		).should('have.visible');
		cy.contains('Send Bulk Invite').click();
		cy.get(
			'div[class*="pt-4 pb-2 filter-rounded bg-bone-white rounded-lg v-card v-sheet theme--dark"]'
		).should('have.visible');
		cy.get('input[type=file]').last().selectFile(value, { force: true });
		cy.wait(1000);
		cy.contains('Upload CSV File').click();
		cy.get(
			'button[class*="text-font-14 font-weight-400 btn-txt-transform-none bg-main-pink-1 white--text mt-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
		).should('have.visible');
		cy.get(
			'button[class*="mr-2 v-btn v-btn--outlined v-btn--rounded theme--light v-size--x-small"]'
		).click();
		cy.get(
			'div[class*="v-dialog v-dialog--active v-dialog--persistent"]'
		).should('have.visible');
		cy.get('input[maxlength="35"]').eq(2).clear({ force: true });
		cy.get('input[maxlength="35"]').eq(2).type(firstName, { force: true });
		cy.get('input[maxlength="35"]').eq(3).clear({ force: true });
		cy.get('input[maxlength="35"]').eq(3).type(lastName, { force: true });
		cy.get('input[min="1"]').last().clear({ force: true, multiple: true });
		cy.get('input[min="1"]')
			.last()
			.type(email, { force: true, multiple: true });
		cy.get(
			'button[class*="text-font-14 font-weight-400 btn-txt-transform-none bg-main-pink-1 white--text mt-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
		).click({ multiple: true, force: true });
		cy.wait(1000);
	}

	inviteClient(firstName, lastName, email) {
		cy.contains('Invite client').click();
		cy.get(
			'div[class*="v-dialog v-dialog--active v-dialog--persistent"]'
		).should('have.visible');
		cy.get('input[maxlength="35"]').eq(0).clear({ force: true });
		cy.get('input[maxlength="35"]').eq(0).type(firstName, { force: true });
		cy.get('input[maxlength="35"]').eq(1).clear({ force: true });
		cy.get('input[maxlength="35"]').eq(1).type(lastName, { force: true });
		cy.get('input[min="1"]').last().clear({ force: true, multiple: true });
		cy.get('input[min="1"]')
			.last()
			.type(email, { force: true, multiple: true });
		cy.get(
			'button[class*="text-font-14 font-weight-400 btn-txt-transform-none bg-main-pink-1 white--text mt-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
		).click();
		cy.get(
			'div[class*="v-dialog v-dialog--active v-dialog--persistent"]'
		).should('have.visible');
	}

	clickTabClientList() {
		cy.get(
			'button[class*="btn-txt-transform-none rounded-0 font-size-12 white--text px-2 font-weight-bold v-btn v-btn--has-bg theme--dark elevation-0 v-size--default transparent"]'
		)
			.last()
			.click();
		cy.wait(1000);
	}

	revoke() {
		cy.get(
			'button[class*="text-decoration-none white--text dot-cancelled btn-txt-transform-none my-auto text-right mr-12 v-btn v-btn--has-bg v-btn--rounded theme--dark elevation-0 v-size--small"]'
		).click();
	}

	checklistAll() {
		var length;
		cy.get(
			'i[class*="v-icon notranslate mdi mdi-checkbox-blank-circle-outline theme--dark"]'
		).then(($value) => {
			length = $value.length;
			if (length > 0) {
				cy.get(
					'i[class*="v-icon notranslate mdi mdi-checkbox-blank-circle-outline theme--dark"]'
				)
					.first()
					.click();
				cy.log('Lebih dari 0');
			} else {
				cy.log('Kosong');
			}
		});
	}

	unChecklistAll() {
		this.checklistAll();
		cy.wait(500);
		cy.get(
			'i[class*="v-icon notranslate mdi mdi-checkbox-marked-circle theme--dark"]'
		)
			.first()
			.click();
	}

	resend() {
		this.checklistAll();
		cy.wait(1000);
		cy.get(
			'button[class*="text-decoration-none white--text bg-main3 btn-txt-transform-none my-auto text-right v-btn v-btn--has-bg v-btn--rounded theme--dark elevation-0 v-size--small"]'
		).click();
		cy.wait(5000);
	}

	showInstruction() {
		cy.contains('Invite client').click();
		cy.get(
			'div[class*="v-dialog v-dialog--active v-dialog--persistent"]'
		).should('have.visible');
		cy.get(
			'button[class*="text-font-14 font-weight-400 btn-txt-transform-none bg-main-1 white--text mt-1 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--small"]'
		).click();
		cy.get(
			'div[class*="pt-4 pb-2 filter-rounded bg-bone-white rounded-lg v-card v-sheet theme--dark"]'
		).should('have.visible');
		cy.get(
			'span[class*="text-font-16 font-weight-700 pl-6 text-blue6 mx-auto text-center"]'
		).click();
		cy.wait(500);
	}
}

export default BusinessAdmin;
