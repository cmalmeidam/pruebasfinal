import * as transversales from "./function_tx";
const testData = require("../fixtures/test_schema.json");

describe("17. Publicar una página con fecha en el pasado dd.mm.yyyy.", () => {
  const testDataRow=testData[Math.floor(Math.random() * testData.length)];
    const data = {
      namePage: testDataRow.page_title3,
      date: testDataRow.date2
    };
    context(`Generating a test for ${data.namePage}`, () => {
      it("should show error date format dd.mm.yyyy", () => {
        transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
        cy.wait(1000);
        transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
        cy.wait(1000);
        createPage(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5,data.namePage,data.date);
      });
    });
  });


function createPage(path, url, namePage, date) {

  cy.wait(1000);
  cy.get('.gh-nav-list.gh-nav-manage').contains('Pages').click();
  cy.wait(1000);
  cy.get('a[href*="page"]').contains('New page').click();
  cy.wait(1000);
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .type(namePage)
    .type("{enter}");
    cy.wait(1000);
  cy.visit(url+"pages/");
  cy.wait(1000);
  cy.get(".gh-content-entry-title").contains(namePage).click({force:true});
  cy.wait(1000);
  cy.get(
    ".post-settings"
  ).click();
  cy.wait(1000);
  cy.get(
    '[placeholder="YYYY-MM-DD"]'
  ).click().clear().type(date).type("{enter}");
  cy.wait(1000);
  cy.get(".gh-date-time-picker-error").contains("Invalid date format, must be YYYY-MM-DD").should("exist");
  cy.wait(1000);
  cy.visit(url+"pages/");
  cy.get(".gh-content-entry-title").contains(namePage).should('exist');
  cy.wait(1000);
  cy.get(".gh-content-entry-title").contains(namePage).click({force:true});
  cy.wait(1000);
  cy.get(".post-settings").click();
  cy.wait(1000);
  cy.get(
    ".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button"
  ).click();
  cy.wait(1000);
  cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
        .contains("Delete")
        .click();
        cy.wait(1000);
}