/// <reference types="cypress" />

describe(
  'Assess starter content has been loaded correctly',
  {
    env: {
      baseUrl: 'http://localhost:3000',
    },
  },
  () => {
    it('Loads up into the server', () => {
      cy.visit(Cypress.env('baseUrl'))
    })
  },
)
