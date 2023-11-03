
describe('Handling child windows', () => {

    it('Should handle child window', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#opentab').invoke("removeAttr", "target").click();
        cy.wait(2000);
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('#navbarSupportedContent a[href="about.html"]').click();
            cy.wait(3000);
            cy.get('.section-title.mt-50 h2').should('contain', 'Welcome to QAClick')
        });
    });


});


