import superprofHome from "../PageObjectModel/pages/superprofHome"
import superprofResults from "../PageObjectModel/pages/superprofResults"
import navbar from '../PageObjectModel/components/navbar'

const home = new superprofHome
const results = new superprofResults
describe('Home Page Tests', () => {

  beforeEach("Navigate to home", () => {
    home.navigateToHome()
  })


 //Login tests
  describe('Login tests', () => {
    beforeEach(() => {
      cy.intercept('POST', '/api/v3/token/').as('login');
    });
   
    it('login ok and response is 200 ', () => {
      cy.intercept('POST', '/api/v3/token/').as('login');
      const email = Cypress.env('username');
      const password = Cypress.env('password');

      home.login(email, password)
      cy.wait('@login').then(({ response }) => {
        expect(response.statusCode).to.eq(200);
      });
    });

    it.only('login fail and response is 400 or 401', () => {
      cy.intercept('POST', '/api/v3/token').as('login')
      const email = Cypress.env('username')
      home.login(email, 'failpass123')
      cy.wait('@login').then(({ response }) => {
        expect(response.statusCode).to.eq(400,401);
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


})
