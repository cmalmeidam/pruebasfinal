import * as transversales from "./function_tx";

describe("Crear un tag version 3.42.5", function () {
  it("Crear un tag Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    createTag(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function createTag(path, url) {
  const nameTag =
    "createtag" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
  cy.visit(url+"tags/")
  .then(() => {
    cy.wait(1500);  
  });
  cy.get('a[href*="tags"]').contains('New tag').click({force: true})
  .then(() => {
    cy.wait(1500);   
  });
  cy.url().should("eq",
    url+"tags/new");
  cy.get("input#tag-name.ember-text-field.gh-input.ember-view").type(nameTag, { force: true });
  cy.get("textarea#tag-description.gh-tag-details-textarea.ember-text-area.gh-input.ember-view").type(
      "Descripción tag", { force: true })
      .then(() => {
        cy.wait(1500);       
      });
  cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({force: true,})
  .then(() => {
    cy.wait(1500);  
  });
  cy.url().should('contain',nameTag);
  cy.visit(url+"tags/")
    .then(() => {
      cy.wait(1500);    
    });
    cy.get(".gh-tag-list-name").contains(nameTag).should("exist");
  }
