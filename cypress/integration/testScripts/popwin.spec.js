/// <reference types='cypress' />
describe ('pop win',()=> {
    it('Pop win',()=>{

    })
    it.only('Acessing IFrame', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(function (myframe){
            const frame = myframe.contents().find('#tinymce')
            cy.wrap(frame).clear().type('Hello Welcome')
        })


    })
    it.only('Handling Alert', () =>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Alert').click()
        cy.on('windows alert', (str)=>{
            expect(str).to.be.equals('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
        cy.on('windows alert', (str)=>{
            expect(str).to.be.equals('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('contain', 'You clicked: OK')
    })
})