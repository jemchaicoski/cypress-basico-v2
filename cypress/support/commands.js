Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('PrimeiroNomeExemplo')
    cy.get('#lastName').type('UltimoNomeExemplo')
    cy.get('#email').type('emailemail@email.com')
    cy.get('#phone').type('5591188887777')
    cy.get('#open-text-area').type('ajudaTeste1234, ajudaTeste1234 ajudaTeste1234, ajudaTeste1234, ajudaTeste1234 ajudaTeste1234, ajudaTeste1234, ajudaTeste1234 ajudaTeste1234, ajudaTeste1234, ajudaTeste1234 ajudaTeste1234,', { delay: 0 })
    cy.contains('button', 'Enviar').click()
})