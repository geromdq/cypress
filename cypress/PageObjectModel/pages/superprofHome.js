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
         return cy.contains('Conectate') 
    }

    emailField(){
        return cy.xpath('//*[@id="signin-form"]/div/div[1]/input')
    }

    passwordField(){
        return cy.get('[name="password"]')
    }

     submitButtonLogin(){
        return cy.contains('Conectate').should('be.visible')
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

    login(email, password) {
        cy.clickConectate()
        this.emailField().type(email)
        this.emailField().type('{enter}')
        this.passwordField().type(password)
        this.passwordField().type('{enter}')


    }
}

export default superprofHome

