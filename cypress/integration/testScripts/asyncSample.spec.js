/// <reference types = 'cypress' />
describe('Asynchronous Nature sample', {
    "retries":{
      "openMode":2,
      "runMode":2
    }
  },() => {
      it('Launch URL', () => {
        cy.visit("http://books.toscrape.com/index.html",'{timeout:100000}') //No Command is executed
         cy.contains('Travel').click() //No Command is executed
     
         cy.url().should('include', 'travel').pause()
         console.log("Before Test Execution") // Log to check the async behaviour
         cy.get("h1").should('be.visible')   //No Command is executed
         cy.get('.image_container').its('length').should('eq',11).debug()
        //To make this log as asynchronous
        cy.get("h1").should("be.visible").then( () => {
          console.log("After Test Execution")
        })
      })
     
    })