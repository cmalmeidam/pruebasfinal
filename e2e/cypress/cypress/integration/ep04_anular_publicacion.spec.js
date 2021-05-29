import * as transversales from "./function_tx";

describe("Anular publicación de un post version 3.42.5", function () {
  it("Anular publicación de un post Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    anularPubPost(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function anularPubPost(path,url) {
  cy.wait(1000);
  cy.visit(url+"posts").then(() => {
    cy.wait(1500);  
  });
  cy.get(".ember-power-select-selected-item").contains('All posts').click().then(() => {
    cy.wait(1500);    
  });
  cy.get(".ember-power-select-option").contains('Published posts').click().then(() => {
    cy.wait(1500);    
  });
  cy.get(".ember-view.permalink.gh-list-data.gh-post-list-title") 
    .then(($title) => {
      let published = $title.length;
      console.log('published:',published);
      let title = $title.get(transversales.getRandomInt(0, $title.length));
      cy.wrap(title).click({ force: true }).then(() => {
        cy.wait(1500);     
      });    
      cy.get(
        ".gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view"
      ).click().then(() => {
        cy.wait(1500);       
      });
      cy.get(".gh-publishmenu-radio-label").contains("Unpublished").click().then(() => {
        cy.wait(1500);       
      });
      cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view")
        .contains("Unpublish")
        .click().then(() => {
          cy.wait(1500);          
        });
      cy.get(".blue.link.fw4.flex.items-center.ember-view").click().then(() => {
        cy.wait(1500);        
      });   
    });
  cy.wait(1000);
}
