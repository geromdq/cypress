import superprofHome from "../pages/superprofHome"
import superprofDisplay from "../pages/superprofResults"

const home = new superprofHome
const display = new superprofResults 
describe('.. ',()=>{

    beforeEach("Navigate to home",()=>{
        home.navigateToHome()
    })

    it("Find teacher",()=>{
        home.search('Clases de ingles')
        display.mainTitle().should('have.text','Los profesores de inglés cerca de ti')
    })
})