/// <reference types="cypress"/>

describe('Log in the main page', () => {

    it('Enter the username and password', () => {
        
        cy.visit('https://development.sqrl.zcl.lol');
        cy.get('#email')
            .should('not.contain.text')
            .type('test1@test.com');

        cy.get('input[type="password"]')
            .should('not.contain.text')
            .type('password');

        cy.get('.p-button-label').click();
        cy.wait(2000);
    });

});




