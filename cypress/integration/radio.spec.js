/// <reference types="Cypress" />

describe('Radio tests', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
        
    it('marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('be.checked')
    })

    it('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radioOption){
                cy.wrap($radioOption).check()
                cy.wrap($radioOption).should('be.checked')
            })
    })

})