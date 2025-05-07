describe("Enviar dinheiro com saldo suficiente", () => {
  it("Deve enviar dinheiro com sucesso", () => {
    cy.get(".MuiButton-colorInherit").click();
    cy.get("#user-list-search-input).click().type(Parisian").click();
    cy.get(
      "[data-test='user-list-item-uBmeaz5pX'] .MuiListItemText-primary"
    ).click();
    cy.get("#amount").type(1600);
    cy.get(
      ".MuiInputBase-input[aria-describedby='transaction-create-description-input-helper-text']"
    ).type("PG");
    cy.get("[data-test='transaction-create-submit-payment']").click();
  });
});

describe("Enviar dinheiro com saldo insuficiente", () => {
  it("Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente", () => {
    cy.get(".MuiButton-colorInherit").click();
    cy.get("#user-list-search-input).click().type(Parisian").click();
    cy.get(
      "[data-test='user-list-item-uBmeaz5pX'] .MuiListItemText-primary"
    ).click();
    cy.get("#amount").type(600);
    cy.get(
      ".MuiInputBase-input[aria-describedby='transaction-create-description-input-helper-text']"
    ).type("PG");
    cy.get("[data-test='transaction-create-submit-payment']").click();
  });
});
