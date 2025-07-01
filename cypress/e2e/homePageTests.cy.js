import superprofHome from "../PageObjectModel/pages/superprofHome"
import superprofResults from "../PageObjectModel/pages/superprofResults"

const home = new superprofHome
const results = new superprofResults 
describe('.. ',()=>{

    beforeEach("Navigate to home",()=>{
        home.navigateToHome()
    })


    //Front end tests
    it("Find teacher",()=>{
        home.search('Clases de ingles')
        results.mainTitle().should('have.text','Los profesores de inglés cerca de ti')
    })

   /* it.only('Find Batería Subject on navbar', { scrollBehavior: false } ,() => {
        function ensureElementVisible(maxRetries = 10) {
          if (maxRetries === 0) {
            throw new Error('No se encontró el elemento en viewport tras varios intentos');
          }
          home.bateriaSubject().then(($el) => {
            const rect = $el[0].getBoundingClientRect();
        
            const isInViewport =
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= Cypress.config("viewportHeight") &&
              rect.right <= Cypress.config("viewportWidth");
      
            if (isInViewport) {
              expect(isInViewport).to.be.true;
            } else {
              home.nextClickNavbar()
              cy.wait(3000).then(() => {
                ensureElementVisible(maxRetries - 1);
              });
            }
          });
        }
    
        ensureElementVisible();
      });*/

      it.only('Encuentra el Subject Bajo en el navbar haciendo scroll dinámico', () => {
        cy.viewport(1920, 1080);
  function scrollUntilVisible(maxTries = 10) {
    if (maxTries === 0) {
      throw new Error('No se encontró el elemento tras varios intentos');
    }

    cy.get('body').then(($body) => {
      if ($body.find('[data-search="Bajo"]').length) {
        // El elemento ya está en el DOM
        cy.get('[data-search="Bajo"]')
          .scrollIntoView({ block: 'nearest'})
          .wait(3000)
          .should('be.visible')
          .click();
      } else {
        // El elemento todavía no está en el DOM, hacemos click en la flecha
        home.nextClickNavbar();
        cy.wait(500).then(() => {
          scrollUntilVisible(maxTries - 1);
        });
      }
    });
  }

  scrollUntilVisible();
});



    //API tests
    it("verify 200 code on homePage",()=>{
        cy.intercept('GET','/').as('getHome')
        home.navigateToHome()
        cy.wait('@getHome').its('response.statusCode').should('eq', 200);
    })

    it("verify if 'keep-alive' is included in the request headers",()=>{
        cy.intercept('GET','https://www.superprof.com.ar/a/getSubjects/**').as('getSubjects')
        home.search('Clases de ingles')
        cy.wait('@getSubjects').then(({ request }) => {
            expect(request.headers['connection']).to.equal('keep-alive');
        });
    })
    

})