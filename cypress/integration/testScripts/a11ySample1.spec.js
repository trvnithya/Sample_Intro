/// <reference types='cypress' />
describe('Accessibility Testing', ()=> {
    it('First Sample A11y Test', ()=>{
        //cy.visit('https://www.cypress.io/features/')
        cy.visit('https://demo.opencart.com/')
        cy.injectAxe()
        //cy.checkA11y()
        //cy.checkA11y('.input-group-btn > .btn')
     cy.checkA11y({
     // exclude: ['.input-group-btn > .btn' , onclick="cart.add('43')"]
     exclude: [onclick="cart.add('43')"]
    // exclude: ['.input-group-btn > .btn']
      //exclude: ['.fa fa-shopping-cart > .hidden-xs hidden-sm hidden-md']
        
    })
        
    })
})