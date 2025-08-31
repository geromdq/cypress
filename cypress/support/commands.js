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

//Insert cookie modal
Cypress.Commands.add('acceptCookies', () => {
  cy.setCookie(
    'axeptio_cookies',
    '{%22$$token%22:%22si69z2zsosmrfe6e93goei%22%2C%22$$date%22:%222025-08-29T13:58:42.156Z%22%2C%22$$cookiesVersion%22:{%22name%22:%22superprof%20ar%22%2C%22identifier%22:%22686cfa9f2ea0d487d496b22a%22}%2C%22bing%22:true%2C%22google_ads%22:true%2C%22criteo%22:true%2C%22meta%22:true%2C%22google_analytics%22:true%2C%22Bing%22:true%2C%22Google_Ads%22:true%2C%22Criteo%22:true%2C%22$$googleConsentMode%22:{%22version%22:2%2C%22analytics_storage%22:%22granted%22%2C%22ad_storage%22:%22granted%22%2C%22ad_user_data%22:%22granted%22%2C%22ad_personalization%22:%22granted%22}%2C%22$$completed%22:true}',
    { domain: 'www.superprof.com.ar' }
  );
});