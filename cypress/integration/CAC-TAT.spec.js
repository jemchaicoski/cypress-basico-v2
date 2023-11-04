/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    
    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('PrimeiroNomeExemplo')
        cy.get('#lastName').type('UltimoNomeExemplo')
        cy.get('#email').type('emailemail@email.com')
        cy.get('#phone').type('5591188887777')
        cy.get('#open-text-area').type('ajudaTeste1234, ajudaTeste1234 ajudaTeste1234, ajudaTeste1234, ajudaTeste1234 ajudaTeste1234, ajudaTeste1234, ajudaTeste1234 ajudaTeste1234, ajudaTeste1234, ajudaTeste1234 ajudaTeste1234,', { delay: 0 })
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
    })
    
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('PrimeiroNomeExemplo')
        cy.get('#lastName').type('UltimoNomeExemplo')
        cy.get('#email').type('emaiInvalido.com')
        cy.get('#phone').type('5591188887777')
        cy.get('#open-text-area').type('ajudaTeste1234, ajudaTeste1234 ajudaTeste1234, ajudaTeste1234, ajudaTeste1234 ajudaTeste1234, ajudaTeste1234, ajudaTeste1234 ajudaTeste1234, ajudaTeste1234, ajudaTeste1234 ajudaTeste1234,', { delay: 0 })
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    
    it('valida que o input de telefone está om o condeúdo vazio ao digitar apenas caracteres não numéricos', function() {
        cy.get('#firstName').type('PrimeiroNomeExemplo')
        cy.get('#lastName').type('UltimoNomeExemplo')
        cy.get('#email').type('emailemail@email.com')
        cy.get('#phone').type('textoInvalido')
        cy.get('#phone').should('have.text', '')
    })
    
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('PrimeiroNomeExemplo')
        cy.get('#lastName').type('UltimoNomeExemplo')
        cy.get('#email').type('emailemail@email.com')
        cy.get('#phone-checkbox').click()
        
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName').type('PrimeiroNomeExemplo').should('have.value', 'PrimeiroNomeExemplo')
        .clear().should('have.value', '')
        cy.get('#lastName').type('UltimoNomeExemplo').should('have.value', 'UltimoNomeExemplo')
        .clear().should('have.value', '')
        cy.get('#email').type('emailemail@email.com').should('have.value', 'emailemail@email.com')
        .clear().should('have.value', '')
        cy.get('#phone').type('5591188887777').should('have.value', '5591188887777')
        .clear().should('have.value', '')
    })
    
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.', function() {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    
    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })

})
