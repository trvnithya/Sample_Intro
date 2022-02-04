/// <reference types = 'cypress' />
describe('API Testing - Trello Application', () => {
    //var baseUrl ='http://localhost:3000/'
    // beforeEach(()=>{
    //     cy.request({
    //         method: 'POST',
    //         url: '/api/reset'
    //     })
    // })
    // it('Create a New Board ', () => {
    //     cy.visit('/')
    //     cy.request({
    //         method: 'POST',
    //         url: '/api/boards',
    //        body:{
    //             'name' : 'Create Cypress Samples'
    //         }
    //      })
    // })
    it('Update Board Name ', () => {
        cy.visit('/')
        cy.request({
            method: 'PATCH',
            url: '/api/boards/70795555197',
            body:{
               'name' : 'Updated my Board Name'
            }
        })
    })
    it('DeletevRequest ', () => {
        cy.visit('/')
        cy.request({
            method: 'DELETE',
            url: '/api/boards/70795555197'
        })
    })
})