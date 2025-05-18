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


    //API tests
    it("verify 200 code on homePage",()=>{
        cy.intercept('GET','/').as('getHome')
        home.navigateToHome()
        cy.wait('@getHome').its('response.statusCode').should('eq', 200);
    })

})