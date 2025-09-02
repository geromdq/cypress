import superprofHome from "../PageObjectModel/pages/superprofHome"
import superprofResults from "../PageObjectModel/pages/superprofResults"
import navbar from '../PageObjectModel/components/navbar'

const home = new superprofHome
const results = new superprofResults
describe('Home Page Tests', () => {

  beforeEach("Navigate to home", () => {
    cy.acceptCookies()
    home.navigateToHome()
  })

  //Login tests
  describe('Login tests', () => {
    beforeEach(() => {
      cy.intercept('POST', '/api/v3/token/').as('login');
    });

    it('login ok and response is 200 ', () => {

      home.login(Cypress.env('username'), Cypress.env('password'))
      cy.wait('@login').then(({ response }) => {
        expect(response.statusCode).to.eq(200);
      });
    });

     it.only('login error and response is 400 ', () => {

      home.login(Cypress.env('username'), 'wrongpass123')
      cy.wait('@login').its('response.statusCode')
  .should('be.oneOf', [400, 401]);
    });
    });


  //Front end tests
  it("Find teacher", () => {
    home.search('Clases de ingles')
    results.mainTitle().should('have.text', 'Los profesores de inglés cerca de ti')
  })


  it('Find Bajo on navbar', () => {
    cy.viewport(1920, 1080);
    cy.scrollTo('top');
    navbar.scrollToAndClickItem('Bajo');
  });

  it("Validate autocomplete from search box", () => {
    home.autoCompleteSearchbox().should('have.text', 'Matemática')
  })


})
