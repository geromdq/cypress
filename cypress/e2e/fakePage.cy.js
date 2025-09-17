describe('Aquí va el título',()=>{
    it('visit google.com',()=>{
        cy.visit('https://www.google.com')
        cy.get('.lnXdpd').should('exist')
    })

   it('Write on textbox',()=>{
     cy.visit('https://www.google.com')
     cy.get('textarea[name="q"]').type('Seleccion Argentina').should('have.value','Seleccion Argentina')
   })

   it('check 200 on endpoint',()=>{
    cy.intercept('GET','/assets/css/vendor/fira.css').as('response')
    cy.visit('https://example.cypress.io')
    cy.wait('@response').its('response.statusCode').should('eq',200)
   })


   it('check 400 on endpoint',()=>{
    cy.intercept('GET','/endpoint/').as('alias')
    cy.visit("website.com")
    cy.wait('@alias').its('response.statusCode').should('eq',400)
   })

   ////////////////////////////////////////////////////////

   it.only('visit practicetestautomation site',()=>{
      cy.visit('https://practicetestautomation.com')
      cy.get('#menu-item-20').click()
     // cy.get('a[href*="login.3dgames.com.ar/login"]').click() //GET a un a[href que contenga "login.3dgames..."
      cy.get('.post-title').should('have.text','Practice')

      cy.get('a[href*="practice-test-login/"]').click()
      cy.fixture('loginDataPractice').then((login) => {
        login.slice(0,4).forEach((login) => {
         cy.get('#username').clear().type(login.username)
         cy.get('#password').clear().type(login.password)
         cy.get('#submit').click()
      })

      cy.fixture('loginDataPractice').then(login)
     
    })




  })
})