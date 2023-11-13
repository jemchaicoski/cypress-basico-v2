/// <reference types="Cypress" />

describe('Radio tests', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
        
    it('seleciona um arquivo da pasta fixtures', function() {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should(function(input) {
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })

    it('seleciona um arquivo simulando um drag-and-drop', function() {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json', { action:'drag-drop'})
            .should(function(input) {
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example').as('sampleFile')
        cy.get('input[type="file"]')
            .selectFile('@sampleFile')
    })

})
