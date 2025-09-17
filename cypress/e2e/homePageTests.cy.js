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

    it('login error and response is 400 ', () => {

      home.login(Cypress.env('username'), 'wrongpass123')
      cy.wait('@login').its('response.statusCode')
        .should('be.oneOf', [400, 401]);
    });
  });


  //Front end tests
  it("Find subjects on fixture", () => {
    cy.fixture('subjects').then(subjects => {
      subjects.forEach(({ subject }) => {
        home.search(subject)
      })

      //results.mainTitle().should('have.text', 'Los profesores de inglés cerca de ti')
    })
  });

  it('Find Bajo on navbar', () => {
    cy.viewport(1920, 1080);
    cy.scrollTo('top');
    navbar.scrollToAndClickItem('Bajo');
  });

  it("Validate autocomplete from search box", () => {
    home.autoCompleteSearchbox().should('have.text', 'Matemática')
  })

  //Responsivity tests
  it.only("Validate mobile menu", () => {
    const viewports = [
      { device: 'iphone-6', expected: 'be.visible' },
      { device: 'iphone-x', expected: 'be.visible' },
      { device: 'ipad-2', expected: 'be.visible' },
      { device: 'macbook-13', expected: 'be.hidden' },
      { device: 'macbook-15', expected: 'be.hidden' }
    ]

    viewports.forEach(({ device, expected }) => {
      cy.viewport(device)
      home.hamburgerMenu().should(expected)
    })
  })
})



