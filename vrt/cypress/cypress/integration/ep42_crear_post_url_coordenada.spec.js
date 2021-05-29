import * as transversales from "./function_tx";
import * as crearPost from "./function_crearPost"
var faker = require('faker');

describe("42. Crear un post con url con coordenada", function () {
  it("Crear un post Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    const nombrePost = faker.random.alphaNumeric(10);
    const urlPost = faker.address.nearbyGPSCoordinate();
    crearPost.crearPostUrl(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5,nombrePost,urlPost.toLocaleString());
    cy.wait(1000);
  });
});