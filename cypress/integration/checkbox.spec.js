/// <reference types="Cypress" />

describe('Checkbox tests', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
        
    it('marca ambos checkboxes, depois desmarca o último', function() {
        //codigo abaixo funcionaria, mas não marcaria ambos ao mesmo tempo
        // cy.get('#email-checkbox')
        //     .check()
        //     .should('be.checked')

        // cy.get('#phone-checkbox')
        //     .check()
        //     .should('be.checked')
        //     .uncheck()

        cy.get('input[type="checkbox"]')
            .check()
            .last()
            .uncheck()
            .should('not.be.checked')
    })
})