/// <reference types="Cypress" />

it('Exemplo de timeout', function () {
  cy.visit('/timeout');

  cy.contains('button', 'Habilita').click()
  cy.get('#firstname')
    .should('be.visible')
    .type('Leonardo', { timeout: 10000 })
});