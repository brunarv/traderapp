/// <reference types="cypress" />

describe(`Validating some expected UI elements`, () => {
    beforeEach(() => {
        cy.visit('https://trader-beta.vercel.app/')
        cy.wait(4 * 1000)
      })

    afterEach(() => {
        cy.visit('https://trader-beta.vercel.app/')
      })


    it('Home Tile, Home Heading and asset should be visable', () => {
        //Home Title
        cy.contains('Drypto')
        
        //Home Heading
        cy.get('.Home_heading__BTwrO').should('have.text','Buy')
        
        //Select asset button
        cy.get('.Home_asset__Qbco_').click()
        cy.get('.Home_assetList__4sTKS')
            .find('.Home_assetClass__ANX4q')
            // .should(cb) callback function will be retried
            .should(($div) => {
                expect($div).to.have.length(3)
            }) 
    });
});