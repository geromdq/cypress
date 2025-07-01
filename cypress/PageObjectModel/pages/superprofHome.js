class superprofHome{

    //Elementos
    searchBox(){
        return cy.get('.home-search-form-container')
    }


    searchButton(){
        return cy.contains('button', 'Buscar')
    }

    subjectsContainerNext(){
        return cy.get('.chevron').eq(1)
    }

    bateriaSubject(){
        return cy.get('[data-search="Bajo"]')
    }

    //Comportamientos
    navigateToHome(){
        cy.visit('https://www.superprof.com.ar')
    }

    search(toSearch){
        this.searchBox().click().type(toSearch)
        this.searchButton().click()
    }

    nextClickNavbar(){
        this.subjectsContainerNext().click()
    }
}

export default superprofHome

