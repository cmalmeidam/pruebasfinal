import * as transversales from "./function_tx";

describe("Eliminar un post version 3.42.5", function () {
  it("Eliminar un post Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    eliminarPost(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function eliminarPost(path, url) { 
  cy.wait(1000);
  cy.visit(url+"posts")
  .then(() => {
    cy.wait(1500);    
  });
  cy.get(".gh-content-entry-title").then(($title) => {
    let title = $title.get(transversales.getRandomInt(0, $title.length));
    cy.wrap(title)
      .click({ force: true })
      .then(() => {
        cy.wait(1500);        
      });
  });
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .invoke("val")
    .then((val) => {
      cy.get(".post-settings")
        .click()
        .then(() => {
          cy.wait(1500);          
        });
      cy.get(".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button")
        .click()
        .then(() => {
          cy.wait(2000);         
        });
      cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
        .contains("Delete")
        .click()
        .then(() => {
          cy.wait(2500);         
        });
      cy.wait(1000);
      cy.visit(url+"posts");
      cy.get(".gh-content-entry-title").contains(val).should("not.exist")
      .then(() => {
        cy.wait(2500);     
      });
    });
  cy.wait(1000);
}