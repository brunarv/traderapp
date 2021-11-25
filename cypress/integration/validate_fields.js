/// <reference types="cypress" />

describe(`Validating different inputs in the amount text field`, () => {
    beforeEach(() => {
        cy.visit('https://trader-beta.vercel.app/')
        cy.wait(4 * 1000)
      })

    it('Buy button should be enable when amount input is greater than 1 ', () => {
        cy.get('.Home_amount__ImoJo').type('2')
        cy.get('.Home_buy__ZvRus', { timeout: 4000 }).should('to.be.enabled')
    });

    it('Buy button should be disabled when amount input is 0', () => {
        cy.get('.Home_amount__ImoJo').type('0')
        cy.get('.Home_buy__ZvRus', { timeout: 4000 }).should('to.be.disabled')
    });

    it('Buy button should be disabled when amount input is lower than 0', () => {
        cy.get('.Home_amount__ImoJo').type('-1')
        cy.get('.Home_buy__ZvRus', { timeout: 4000 }).should('to.be.disabled')
    });

    it('Buy button should be disabled when amount input is has letters', () => {
        cy.get('.Home_amount__ImoJo').type('AAAAAAA')
        cy.get('.Home_buy__ZvRus', { timeout: 4000 }).should('to.be.disabled')
    });

    it('uy button should be disabled when amount input is has especial characters', () => {
        cy.get('.Home_amount__ImoJo').type('1#')
        cy.get('.Home_buy__ZvRus', { timeout: 4000 }).should('to.be.disabled')
    });

    it('Buy button should be disabled when amount input is has numbers wiht special characters', () => {
        cy.get('.Home_amount__ImoJo').type('0-1')
        cy.get('.Home_buy__ZvRus', { timeout: 4000 }).should('to.be.disabled')
    });

});