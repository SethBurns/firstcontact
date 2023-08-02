describe('homepage functionality', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/sightings', {
      statusCode: 200,
      fixture: 'initialGet',
    }).as('initialGet');
    cy.visit('http://localhost:3000');
  });
  it('should load a page with inputs that fetches sightings and displays them', () => {
    cy.wait('@initialGet').get('.title').should('contain', 'First Contact');
    cy.get('form').contains('label', 'Location')
    cy.get('.sighting').first().contains('h2', 'Denver, CO')
    cy.get('.sighting').last().contains('h2', 'Louisville, KY')
  });
  it('should take form inputs and post them to the API on button click', () => {
    cy.get('input[name="location"]').type('Lilliwaup, WA');
    cy.get('input[name="location"]').should('have.value', 'Lilliwaup, WA')
    cy.get('textarea[name="description"]').type('Them aliens are scary!');
    cy.get('textarea[name="description"]').should('have.value', 'Them aliens are scary!')
    cy.intercept('POST', 'http://localhost:3001/sightings', (req) => {
      req.body = {
        "location": "Lilliwaup, WA",
        "description": "Them aliens are scary!"
      };
      req.reply({
        statusCode: 201,
        fixture: 'postResponse'
      })
    }).as('postRequest')
    cy.get('#submit').click()
    cy.wait('@postRequest')
    cy.get('.sighting').first().contains('h2', 'Denver, CO')
    cy.get('.sighting').last().contains('h2', 'Lilliwaup, WA')
  })
});
