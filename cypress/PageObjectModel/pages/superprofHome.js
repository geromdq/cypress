class superprofHome{

    //Elementos
    searchBox(){
        return cy.get('.home-search-form-container')
    }


    searchButton(){
        return cy.contains('button', 'Buscar')
    }

    

    
    //Comportamientos
    navigateToHome(){
        cy.visit('https://www.superprof.com.ar')
    }

    search(toSearch){
        this.searchBox().click().type(toSearch)
        this.searchButton().click()
    }
}

export default superprofHome

