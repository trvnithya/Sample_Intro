/// <reference types = 'cypress' />
describe('Asynchronous Nature sample', () => {
    it('locate Elements', ()=> {
        cy.visit('https://radogado.github.io/shadow-dom-demo/')    
        cy.get('#app').shadow().find('#container')
        //Method 1 - Using Variable
        cy.get('#app').shadow().find('#container').then((label) =>{
            const strValue = label.text()
            cy.log('DOM Label :......'+strValue)
        })
        //Method2-Using Aliasing
        cy.get('#app').shadow().find('#container')
        .invoke('text').as('textVal')

        cy.get('@textVal').then( str=>{
            cy.log('Using Alias....'+str)
        })

    })
})