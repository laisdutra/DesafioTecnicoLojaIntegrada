/// <reference types="cypress" />

describe('Coupons Scenarios', () => {

    beforeEach(() => {
        cy.AccessQAStore()
        cy.Login(Cypress.env('email'), Cypress.env('password'))
        cy.GoToImages()

        cy.contains('Produto com uma única imagem').click({force:true})
        cy.get('.principal .acoes-produto .comprar .botao').click()
    })

    it('Sem cupom', () => {

        cy.Checkout()
    })

    it('Frete grátis', () => {

        cy.AddCoupon('FRETEGRATIS')
        cy.get('[data-code=pac]').should('have.attr', 'data-valor', '0')

        cy.Checkout()
    })

    it('10% off', () => {

        cy.AddCoupon('10OFF')

        cy.Checkout()
    })

    it('30 reais', () => {

        cy.AddCoupon('F30REAIS')

        cy.Checkout()
    })
})