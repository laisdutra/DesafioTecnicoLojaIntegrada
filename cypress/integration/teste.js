/// <reference types="cypress" />

describe('teste', () => {
    it('Frete grátis', () => {
        cy.AccessQAStore()
        cy.Login(Cypress.env('email'), Cypress.env('password'))
        cy.GoToImages()

        cy.get(':nth-child(2) > .listagem-item > .produto-sobrepor').click()
        cy.get('.principal .acoes-produto .comprar .botao').click()
    })
})