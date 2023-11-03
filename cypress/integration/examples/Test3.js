/// <reference types="cypress" />

//cypress - Spec

describe('My third test', () => {

    it('Picking groceries', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // cy.get('#checkBoxOption1').check().should('be.checked');
        // cy.get('#checkBoxOption2').check().should('be.checked');
        // cy.wait(3000);

        // cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        // cy.get('#checkBoxOption2').uncheck().should('not.be.checked');
        // cy.wait(3000);

        // cy.get('input[type="checkbox"]').check(['option1', 'option3']);
        // cy.wait(3000);

        
    });
});