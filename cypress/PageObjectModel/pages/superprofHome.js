class superprofHome {

    //Elementos
    searchBox() {
        return cy.get('.home-search-form-container')
    }


    searchButton() {
        return cy.get('.search-header-submit')
    }

    subjectsContainerNext() {
        return cy.get('.chevron').eq(1)
    }

    bajoSubject() {
        return cy.get('[data-search="Bajo"]')
    }

    conectateForm() {
        return cy.contains('Conectate')
    }

    emailField() {
        return cy.get('[name="username"]').eq(1)
    }

    passwordField() {
        return cy.get('[name="password"]')
    }

    submitButtonLogin() {
        return cy.contains('Conectate').should('be.visible')
    }

    autoCompleteBox() {
        return cy.get('.autocomplete-result-value').first()
    }

    hamburgerMenu(){
        return cy.get('.interaction-wrapper').first()
    }

    //Comportamientos
    navigateToHome() {
        cy.visit('https://www.superprof.com.ar/', { failOnStatusCode: false });
    };

    search(toSearch) {
        this.searchBox().click().type(toSearch)
        this.searchButton().click()
    }

    nextClickNavbar() {
        this.subjectsContainerNext().click()
    }

    login(email, password) {
        cy.clickConectate()
        this.emailField().type(email)
        this.emailField().type('{enter}')
        this.passwordField().type(password)
        this.passwordField().type('{enter}')
    }

    autoCompleteSearchbox() {
        this.searchBox().click().type("matema", { delay: 100 })
        return this.autoCompleteBox()
    }

    

}

export default superprofHome

