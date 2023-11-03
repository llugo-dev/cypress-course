/// <reference types="cypress" />

import 'cypress-iframe';

describe('Frames test', () => {
    
    it('Demo test', () => {
        cy.viewport(1200, 660);
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('li a[href="mentorship"]').eq(0).click();
        cy.wait(2000);
        cy.iframe().find('h1[class*="pricing-title"]').each(($el, index) => {
            const text = $el.text();
            if (text.toLowerCase().includes('bronze')) {
                cy.wrap($el).should('have.text', 'BRONZE');
            }
        });
    });
});