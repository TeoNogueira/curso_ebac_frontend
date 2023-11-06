/// <reference types="cypress" />

describe('Testes para agenda de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })


    it('Deve incluir um novo contato na agenda', () => { 
        cy.get('input[type="text"]').type('Teo Muniz')
        cy.get('input[type="email"]').type('teomn@test.com')
        cy.get('input[type="tel"]').type('32123563211')

        cy.get('.adicionar').click()
    });



    it('Deve alterar os dados de um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()

        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Tm Test')

        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('teomnz@test.com')

        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type('32123563213')

        cy.get('.alterar').click()
    })

    

    it('Remove contato em lista', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})