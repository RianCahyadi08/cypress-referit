describe('Call API', () => {
	it('Call api post', () => {
		// https://jsonplaceholder.typicode.com/
		cy.request({
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts',
		}).then((response) => {
			expect(response.status).to.equal(200);
			expect(response.body[0].id).to.equal(1);
			var length = response.body;
			length.forEach((row) => {
				cy.log(row.id);
				cy.log(row.userId);
				cy.log(row.title);
				cy.log(row.body);
			});
		});
	});

	it('Create api post', () => {
		cy.request({
			method: 'POST',
			url: 'https://jsonplaceholder.typicode.com/posts',
			body: {
				title: 'Title Rian',
				body: 'Lorem ipsum dolor sit amet',
			},
		}).then((response) => {
			expect(response.status).to.equal(201);
			expect(response.body.title).to.equal(response.body.title);
			expect(response.body.body).to.equal(response.body.body);
		});
	});

	it('Update api post', () => {
		cy.request({
			method: 'PUT',
			url: 'https://jsonplaceholder.typicode.com/posts/1',
			body: {
				id: 1,
				title: 'Title Rian Update',
				body: 'Lorem ipsum dolor sit amet update',
				userId: 1,
			},
		}).then((response) => {
			expect(response.status).to.equal(200);
			expect(response.body.title).to.equal(response.body.title);
			expect(response.body.body).to.equal(response.body.body);
		});
	});

	it('Delete api post', () => {
		cy.request({
			method: 'DELETE',
			url: 'https://jsonplaceholder.typicode.com/posts/1',
		}).then((response) => {
			expect(response.status).to.equal(200);
		});
	});
});
