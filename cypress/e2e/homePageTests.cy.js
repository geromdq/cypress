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

  const EMAIL = Cypress.env('username');

  //Login tests
  describe('Login tests', () => {
    beforeEach(() => {
      cy.intercept('POST', '/api/v3/token/').as('login');
    });

    it('login ok and response is 200 ', () => {
     // const email = Cypress.env('username');
      const password = Cypress.env('password');

      home.login(EMAIL, password)
      cy.wait('@login').then(({ response }) => {
        expect(response.statusCode).to.eq(200);
      });
    });

    it('login fail and response is 400 or 401', () => {
     // const email = Cypress.env('username')
      home.login(EMAIL, 'failpass123')
      cy.wait('@login').then(({ response }) => {
        expect(response.statusCode).to.eq(400, 401);
      });

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

  it.only("Validate autocomplete from search box", () => {
    home.autoCompleteSearchbox().should('have.text', 'Matemática')
  })


})
