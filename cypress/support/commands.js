Cypress.Commands.add('clickConectate', () => {
  cy.contains('button.basic-header-button.caption', /^Conectate$/)//Trae un jquery list de elementos
    .filter(':visible')//Filtra solo el elemento visible
    .scrollIntoView({ block: 'center' })//Scrollea el botón al centro de la pantalla para evitar conflictos
    .then($btn => {
      const el = $btn[0];

      // Intento Cypress
      cy.wrap($btn).click({ force: true }).focus().type('{enter}');

      // Fallback nativo
      cy.window().then(win => {
        el.dispatchEvent(new win.MouseEvent('click', { bubbles: true, cancelable: true, view: win }));
        el.click();
      });
    });
});