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

    bajoSubject(){
        return cy.get('[data-search="Bajo"]')
    }

    conectateForm(){
        return cy.get('button.basic-header-button').click()
    }

    emailField(){
        return cy.get('[name="username"]')
    }

    passwordField(){
        return cy.get('[name="password"]')
    }

     submitButtonLogin(){
        return cy.get('[type="submit"]')
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

    login(email,password) {
        this.conectateForm().click()
        this.emailField.type    
        this.submitButtonLogin().click()
         this.passwordField.type    
        this.submitButtonLogin().click()
    }
}

export default superprofHome

