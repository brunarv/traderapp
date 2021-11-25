/// <reference types="cypress" />

describe(`Validating Buy functionality `, () => {
    beforeEach(() => {
        cy.visit('https://trader-beta.vercel.app/')
        cy.wait(4 * 1000)
      })

    afterEach(() => {
        cy.visit('https://trader-beta.vercel.app/')
      })

    it('Validate if it is possible to buy ETHs', () => {
        cy.get('.Home_asset__Qbco_').should('have.text','ETH')
        cy.get('.Home_amount__ImoJo').type('1')
        cy.get('.Home_buy__ZvRus').click()
        cy.wait(4 * 1000)
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text','Purchased $1 Ethereum! 🎉')
     });

    it('Validate if it is possible to buy BTCs', () => {
        cy.get('.Home_asset__Qbco_').click()
        cy.get('.Home_assetList__4sTKS > :nth-child(2)').click()
        cy.get('.Home_amount__ImoJo').type('88')
        cy.get('.Home_buy__ZvRus').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text','Purchased $88 Bitcoin! 🎉')
    });

    it('Validate if it is possible to buy SOLs', () => {
        cy.get('.Home_asset__Qbco_').click()
        cy.get('.Home_assetList__4sTKS > :nth-child(3)').click()
        cy.get('.Home_amount__ImoJo').type('120945')
        cy.get('.Home_buy__ZvRus').click()
        cy.get('.Toastify__toast-body > :nth-child(2)', { timeout: 40000 }).should('have.text','Purchased $120945 Solana! 🎉')
    });
});