

describe('My fourth test', () => {

    it('Handling pop-ups and other stuff', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get("#alertbtn").click();
        cy.wait(2000);
        cy.get("#confirmbtn").click();
        cy.wait(2000);

        //window:alert

        cy.on('window:alert', (str) => {
            expect(str)
                .to
                .equal('Hello , share this practice page and share your knowledge');  
        });

        cy.on('window:confirm', (str) => {
            expect(str)
                .to
                .eq('Hello , Are you sure you want to confirm?');
        });
        
    });

});

