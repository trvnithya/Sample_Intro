/// <reference types = 'cypress' />
describe('API Testing - Trello Application', () => {
    //var baseUrl ='http://localhost:3000/'
    // beforeEach(()=>{
    //     cy.request({
    //         method: 'POST',
    //         url: '/api/reset'
    //     })
    // })
    it('Board Number Verification', () => {
        cy.intercept({
            method: 'GET',
            url: '/api/boards'
        }).as('boards')
        cy.visit('/')
        cy.wait('@boards')
        .its('response.statusCode')
        .should('eq',200)
        cy.get('[data-cy=board-item]').should('have.length', 2)
    })
    it('Return empty list ', () => {
        cy.intercept({
        method: 'GET',
             url: '/api/boards/'},{
                body:[]
             }).as('boards')
             cy.visit('/')
    })
    it.only('Pass values from fixture ', () => {
        cy.intercept({
        method: 'GET',
             url: '/api/boards/'
            },{
               fixture:'boards'
             }).as('boards')
             cy.visit('/')
    })
    it.only('Network Failure', () => {
        cy.intercept({
        method: 'GET',
             url: '/api/boards/'
            },{
                forceNetworkError:true
             }).as('boards')
             cy.visit('/')
    })
})