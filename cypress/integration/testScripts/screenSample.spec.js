/// <reference types = 'cypress'/>
describe('Taking Screenshot', () => {
    it('Fullpage Screenshot', () => {
        cy.visit('https://www.example.com/')
        cy.screenshot("Full Page Screenshot",{capture:"fullPage"})
    })
    it('WebElement Screenshot', () => {
        cy.visit('https://www.example.com/')
        cy.get('h1').screenshot("H1-TagScreenshot")
    })  
})
  
