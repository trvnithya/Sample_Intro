/// <reference types = 'cypress'/>
describe('Sample on Xpath', () => {
    it('xpath Locator', () => {
    cy.visit('https://the-internet.herokuapp.com/login','{timeout:100000}')
        //cy.xpath("//input[@id='username']").type('tomsmith')
        //cy.xpath("//input[@id='password']").type('SuperSecretPassword!')
    //Using CSS Selector
    //cy.get('#username').type('tomsmith')
    //cy.get('#password').type('SuperSecretPassword!')
    //Reading from 
    cy.get('#username').type(Cypress.env('username'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('.radius').click()
    })
})
  
