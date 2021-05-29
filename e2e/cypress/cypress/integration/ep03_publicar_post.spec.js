import * as transversales from "./function_tx";

describe("Publicar una pagina version 3.42.5", function () {
  it("Publicar una pagina Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    publicarPost(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function publicarPost(path, url) {
  cy.wait(1000);
  cy.visit(url+"posts")
    .then(() => {
      cy.wait(1500);      
    });
  cy.get(".gh-content-status-draft.gh-badge.gh-badge-purple.nowrap").then(
    ($title) => {
      let draft = $title.length;
      console.log("draft:", draft);
      let title = $title.get(transversales.getRandomInt(0, $title.length));
      cy.wrap(title)
        .click({ force: true })
        .then(() => {
          cy.wait(1500);          
        });
      cy.get(
        ".gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view"
      )
        .click()
        .then(() => {
          cy.wait(1500);        
        });
      cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view")
        .contains("Publish")
        .click()
        .then(() => {
          cy.wait(1500);          
        });
      cy.get(".blue.link.fw4.flex.items-center.ember-view")
        .click()
        .then(() => {
          cy.wait(1500);         
        });
    }
  );
  cy.wait(1000);
}
