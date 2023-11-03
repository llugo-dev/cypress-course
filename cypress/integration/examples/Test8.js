/// <reference types="cypress" />

describe('Check for mouseove', () => {
    it('Testing mouseove', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // cy.get('.mouse-hover-content').invoke('show');
        // cy.get('a[href="#top"]').click();
        // cy.url().should('include', 'top');

        cy.get('#mousehover').click();
        cy.contains('Top').click({force: true});
        cy.url().should('include', 'top');
    });
});

