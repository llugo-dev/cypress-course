/// <reference types="cypress" />

import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";

describe('Use of hooks', () => {
    before(function() {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data) {
            this.data = data;
        });
    })
      
    it('Testing a framework', function() {
        const homepage = new HomePage();
        const productspage = new ProductsPage();
        
        cy.visit(Cypress.env('url') + '/angularpractice/');
        // cy.get('form div.form-group:nth-child(1) input').type(this.data.name);
        // cy.get('form div.form-group:nth-child(2) input').type(this.data.email);
        // cy.get('#exampleFormControlSelect1').select(this.data.gender);
        // cy.get('.ng-untouched').should('have.value', this.data.name);
        // cy.get('form div.form-group:nth-child(1) input').should('have.attr', 'minlength', '2');
        // cy.get('#inlineRadio3').should('be.disabled')
        // cy.pause();
        // cy.get(':nth-child(2) > .nav-link').click();

        homepage.getNameBox().type(this.data.name);
        homepage.getEmailBox().type(this.data.email);
        homepage.getGender().select(this.data.gender);
        homepage.getTwoWayDataBinding().should('have.value', this.data.name);
        homepage.getNameBox().should('have.attr', 'minlength', '2');
        homepage.getShopTab().click();
        
        // this.data.productName.forEach(product => {
        //     cy.selectProduct(product);
        // });

        productspage.getProducts(this.data.productName);
        productspage.checkoutProducts().click();
        let sum = 0;
        cy.get('tr td:nth-of-type(4) strong').each(($element, index) => {
            const text = $element.text();
            const result = text.split(' ');
            cy.log(result[1].trim());
            sum = Number(sum) + Number(result[1].trim());
        }).then(function (res) {
            cy.log(sum);
        });

        cy.get('td.text-right strong').then(function ($el) { 
            const text = $el.text();
            const amount = text.split(' ')[1];
            expect(Number(amount)).to.equal(sum);
        });;

        // cy.get(':nth-child(5) > :nth-child(5) > .btn').click();
        // cy.get('#country').type('United');
        // cy.get('.suggestions > :nth-child(2) > li > a').click();
        // cy.get('#checkbox2').check({force: true});
        // cy.get('input[value="Purchase"]').click();
        // // cy.get('.alert').should('contain.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).');
        // cy.get('.alert').then(function (element) {
        //     const text = element.text();
        //     expect(text.includes('Success')).to.be.true;
        // });
    });
});