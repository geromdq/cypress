function scrollToAndClickItem(label, maxTries = 10) {
  function tryFind() {
    cy.get('body').then(($body) => {
      if ($body.find(`[data-search="${label}"]`).length) {
        cy.get(`[data-search="${label}"]`)
          .scrollIntoView({ block: 'nearest' })
          .should('be.visible')
          .click();
      } else if (maxTries > 0) {
        home.nextClickNavbar();
        cy.wait(500).then(() => scrollToAndClickItem(label, maxTries - 1));
      } else {
        throw new Error(`No se encontró el item ${label} en el navbar.`);
      }
    });
  }

  tryFind();
}

export default {
  scrollToAndClickItem
};