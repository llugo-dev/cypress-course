
describe('Handling web tables', () => {

    it('Should handle web tables', () => {

        cy.viewport(1200, 660);

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#product tbody tr td:nth-child(2)').each(($el, index) => {
            const text = $el.text();
            if (text.includes('Appium (Selenium)')) {
                cy.wrap($el).get('td:nth-child(2)').eq(index).next().then(price => {
                    const textPrice = price.text();
                    expect(textPrice).to.equal('30');
                });
            }
        });

    });

    it ('Look for SQL course', () => {

        cy.viewport(1200, 660);
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#product tbody tr td:nth-child(2)').each(($el, index) => {
            const text = $el.text();
            if (text.includes('SQL in Practical')) {
                cy.wrap($el).get('td:nth-child(2)').eq(index).next().then(price => {
                    const coursePrice = price.text();
                    expect(coursePrice).to.equal('25');
                });
            }
        });
    });

});



