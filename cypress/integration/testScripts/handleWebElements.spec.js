/// <reference types='cypress' />
describe('Types of Locators', () => {
    it('Locate Elements', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('[data-name="menu-2"]').click()
        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        //Locate Email
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox').click()
        //Parent and Child
        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
    })
    it('Locate Elements using - then() & .wrap()', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('[data-name="menu-2"]').click()
        // cy.contains('nb-card', 'Horizontal form').find('[for="inputEmail3"]')
        //     .should('contain', 'Email')
        // cy.contains('nb-card', 'Horizontal form').find('[for="inputPassword3"]')
        //     .should('contain', 'Password')
        //Locate parent
        // const horiForm =  cy.contains('nb-card', 'Horizontal form')
        // horiForm.find('[for="inputEmail3"]').should('contain', 'Email')
        // horiForm.find('[for="inputPassword3"]').should('contain', 'Password')
        //Cypress
        cy.contains('nb-card', 'Horizontal form').then(firstForm => {
            const firstEmailLbl = firstForm.find('[for="inputEmail3"]').text();
            const firstPwdLbl = firstForm.find('[for="inputPassword3"]').text();
            expect(firstEmailLbl).to.be.equals('Email')
            expect(firstPwdLbl).to.be.equals('Password')

            //To verify checkbox attribute
                cy.contains('nb-card','Basic form')
                    .find('nb-checkbox')
                    .click()
                    .find('.custom-checkbox')
                    .invoke('attr','class')
                    .should('contain','checked')


            //to Handle Radio buttons
            cy.contains('nb-card','Using the Grid')
                .find('[type="radio"]').then(radioBtns=> {
                    cy.wrap(radioBtns)
                    .first()
                    .check({force:true})
                    .should('be.checked')

                    cy.wrap(radioBtns)
                    .eq(1)
                    .check({froce:true})
                    cy.wrap(radioBtns)
                    .eq(2)
                    .check({froce:true})
                })
        })
    })
    it.only('Handling WebTables', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('[data-name="menu-2"]').click()
        cy.get('tbody').contains('tr', 'John').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear()
            cy.wrap(tableRow).find('[placeholder="Age"]').type('30')
            cy.wrap(tableRow).find('.nb-checkmark').clear()
            cy.wrap(tableRow).find('td').eq(6).should('contain','30')

        })
    })
    it.only('Add New User', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('[data-name="menu-2"]').click()
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tableRow =>{
            cy.wrap(tablerow).find('[placeholder="First Name"]').type('Test')
            cy.wrap(tablerow).find('[placeholder="Last Name"]').type('Training')
            cy.wrap(tablerow).find('.nb-checkmark').click()
        })
        cy.get('tbody tr').first().find('td').then(tableCol =>{
            cy.wrap(tableCol).eq(2).should('contain','Test')
            cy.wrap(tableCol).eq(3).should('contain','Training')
        })

    })

})
