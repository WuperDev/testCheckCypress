import HomePage from "../support/Pages/home.page";
import LoginPage from "../support/Pages/login.page";
import myAccountPage from "../support/Pages/myAccount.page";

describe("Testy logowania", () => {

  beforeEach(() => {
    cy.step("Wejście na strone logowania")
    LoginPage.visitLoginPage()
  });

    it('Sprawdzenie logowania z poprawnymi danymi i ', () => {
      
      
      cy.step("Wypełnienie formularza poprawnymi danymi i zalogowanie użytkownika")
      LoginPage.login(Cypress.env('username'), Cypress.env('password'))
      myAccountPage.elements.MyAccountHeader().should('be.visible').and('contain.text', "My Account")
    });

    it('Sprawdzenie logowania z niepoprawną nazwą użytkownika', () => {

      cy.step("Wypełnienie formularza niepoprawną nazwą użytkownika i poprawnym hasłem")
      LoginPage.login("badusername", Cypress.env('password'))
      LoginPage.elements.errorAlert().should('be.visible').and('contain.text', 'Error: Incorrect login or password provided.')
    });
  
});
