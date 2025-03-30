describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Navigation Test', function () {
  it('Should navigate to the next and previous slides', function () {
    cy.visit('http://localhost:3000');
    cy.wait(2000); // Czekamy na pełne załadowanie strony

    // Pobranie tekstu pierwszego slajdu
    cy.get('.swiper-slide-active').invoke('text').then((firstText) => {
      const cleanedFirstText = firstText.trim();
      cy.log('First slide text:', cleanedFirstText);

      // Kliknięcie przycisku "następny" i sprawdzenie, czy zmienia się slajd
      cy.get('.swiper-button-next').click();
      cy.wait(2000);
      
      cy.get('.swiper-slide-active').invoke('text').then((newText) => {
        const cleanedNewText = newText.trim();
        cy.log('New slide text:', cleanedNewText);
        expect(cleanedNewText).not.to.eq(cleanedFirstText);
      });

      // Kliknięcie przycisku "poprzedni" i sprawdzenie, czy wraca do pierwszego slajdu
      cy.get('.swiper-button-prev').click();
      cy.wait(2000);
      
      cy.get('.swiper-slide-active').invoke('text').then((returnedText) => {
        const cleanedReturnedText = returnedText.trim();
        cy.log('Returned slide text:', cleanedReturnedText);
        expect(cleanedReturnedText).to.eq(cleanedFirstText);
      });
    });
  });
});
