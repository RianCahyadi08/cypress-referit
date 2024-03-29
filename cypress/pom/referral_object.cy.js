class Referrals {
	clickReferralsModule() {
		cy.contains('Referrals').click();
		cy.contains('My Referrals').should('be.visible');
		cy.wait(1000);
	}

	clickDetailMyReferral() {
		var length;
		cy.get('div.r-card--vertical').then(($value) => {
			length = $value.length;
			if (length > 0) {
				cy.log(length);
				cy.log('Ada detail nya');
				cy.get('div.r-card--vertical').first().click();
				cy.contains('Client:').should('be.visible');
				cy.wait(500);
			} else {
				cy.log('tidak ada');
			}
		});
	}

	searchReferrals(value) {
		cy.get('#search').type(value);
		cy.get('#search').should('have.value', value);
		cy.xpath(
			'//*[@id="app"]/div[1]/main/div/div/div[1]/div/div/div[2]/div/div/div/div[1]/div[2]/button[1]'
		).click();
		cy.wait(500);
	}

	clickBtnFilter() {
		cy.contains('Filter').click();
		cy.contains('Filter').should('be.visible');
	}

	filterAccepted() {
		cy.get('input#accepted').click();
		// cy.get('input#accepted').should('have.value');
	}

	filterReferralSent() {
		cy.get('input#sent').click();
		// cy.get('input#sent').should('have.value');
	}

	filterDeclined() {
		cy.get('input#declined').click();
		// cy.get('input#declined').should('have.value');
	}

	filterExpired() {
		cy.get('input#expired').click();
		// cy.get('input#expired').should('have.value');
	}

	clearFilter() {
		cy.contains('Clear Filter').click();
	}

	clickBtnShowResult() {
		cy.contains('Show Results').click();
		cy.wait(1000);
	}
}

export default Referrals;
