// nmp run start = start server

describe('Get Request', () => {
    let result;
    it('Validate status code of the /posts api', () => {
        result = cy.request('http://localhost:3000/posts');
        result.its('status').should('equal', 200);
    });
    it('Validate /posts api contains the correct keys and values', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts/',
            headers: {
                accept: 'application/json',
            },
        }).then((response) => {
            const body = JSON.parse(JSON.stringify(response.body));
            cy.log(body);

            expect(body[0]).has.property('title', 'Example Json Server');

            expect(body[1]).has.property('author', 'Johny asks..');

            body.forEach(function (item) {
                expect(item).to.have.all.keys('id', 'title', 'author');
                cy.log(
                    'Author: ' + item['author'] + ' & Title: ' + item['title']
                );
            });
        });
    });
});
