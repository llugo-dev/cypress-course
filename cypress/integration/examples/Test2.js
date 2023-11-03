/// <reference types="cypress" />

//cypress - Spec

describe('My second test', () => {

    it('Picking groceries', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/');
        cy.get('.search').type('cu');
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').each(($element) => {
            const prodName = $element.find('h4.product-name').text();
            if (prodName.includes('Cucumber')) {
                cy.wrap($element).find('.increment').click().click(); 
                cy.wrap($element).find('button').click(); 
            }
        });

        cy.wait(1000);

        cy.get('.search').clear().type('bee');
        cy.get('@productLocator').find('.product').each($element => {
            const prodName = $element.find('h4.product-name').text();
            if (prodName.includes('Beetroot')) {
                cy.wrap($element).find('.quantity').clear().type('4');
                cy.wrap($element).find('button').click();
            }
        });
        cy.get('.cart-icon').click();
        cy.get('.action-block').contains('PROCEED TO CHECKOUT').click();
        cy.wait(1000);
        cy.get('button').each($btn => {
            const text = $btn.text();
            if (text.includes('Place Order')) {
                cy.wrap($btn).click();
            }
        });
    });
});