/// <reference types = 'cypress' />
describe('Selecting from dropdown elements', () => {
    it('selecting from dropdown', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#Skills').select('Android')
        cy.get('#Skills').should('have.value', 'Android')
        //cy.get('#countries').select('India')
        //cy.get('span[role="combobox"]').click()
        //cy.get('.select2-selection__rendered').type('Ind')
        //cy.get('.select2-search-field').type('{enter}')
        //cy.get('span[role="combobox"]').should('have.text', 'India')
        //cy.get('[value="India"]',{timeout:10000}).select()
        cy.get('[type="radio"]').check('FeMale')
        cy.get('[type="checkbox"]').check('Cricket')
        cy.get('[type="checkbox"]').check('Movies')
        cy.get('[type="checkbox"]').check('Hockey')
        cy.get('[ng-model="FirstName"]').type("TRV")
        cy.get('[ng-model="LastName"]').type("Nithya")
        //cy.get('.ui-autocomplete-multiselect-item').select(['English','French','Dutch'])
        cy.get('#msdd').click()
        cy.contains('English').click()
        cy.contains('French').click()
        cy.contains('Dutch').click()
        cy.contains('Languages').click()

       //cy.get('.ng-scope').find(['English','French','Dutch'])
  })
})

