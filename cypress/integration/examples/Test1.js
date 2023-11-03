/// <reference types="cypress" />

//cypress - Spec

describe('My first test', () => {

    it('My first case', () => {
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('input.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product').should('have.length', 5);
        cy.get('.products > .product').should('have.length', 4);
        // parent child chaining
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').should('have.length', 4);
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then((el) => {
            console.log('this one =>', el.text());
        });

        cy.get('@productLocator').find('.product').each(($el) => {
           const textVeg = $el.find('h4.product-name').text();
           if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('.product-action > button').click();
           }
        });

        // Assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART');


        cy.get('.brand').then((logoelement) => {
            cy.log(logoelement.text());
        });

        
        
    });

});