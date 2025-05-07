import userData1 from "../fixtures/user-userData1";
describe("Login com sucesso", () => {
  const selectorsList = {
    usernameField: "[#username= 'username' ]",
    passswordField: "[#password= 'userpassword']",
    loginButton: "[button= 'button']",
    signUp: "[data-test='signup']",
    nameUser: "#firstName",
    lastName: "#lastName",
    userName: "#username",
    passwordEnter: "#password",
    confirmPassword: "#confirmPassword",
    login: ".SignUpForm-form",
  };

  it("Deve fazer login com um usuário válido", () => {
    cy.visit("http://localhost:3000/signin").click();
    cy.get(selectorsList.usernameField).type(userData1.userSuccess.username);
    cy.get(selectorsList.passswordField).type(userData1.userSuccess.passsword);
    cy.get(selectorsList.loginButton).click();
  });
});
describe("Tentar fazer login com credenciais inválidas", () => {
  it("Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas", () => {
    cy.visit("http://localhost:3000/signin").click();
    cy.get(selectorsList.usernameField).type(userData1.userFail.username);
    cy.get(selectorsList.passswordField).type(userData1.userFail.passsword);
    cy.get(selectorsList.loginButton).click();
  });
});
describe("Registro de novo usuário com sucesso", () => {
  it("Deve registrar um novo usuário com informações válidas", () => {
    cy.get(signUp).click();
    cy.get(nameUser).type(junior);
    cy.get(lastName).type(souza);
    cy.get(userName).type(juju);
    cy.get(passwordEnter).type(12345678);
    cy.get(confirmPassword).type(12345678);
    cy.get(login).click();
  });
});

describe("Tentar registrar um novo usuário com informações incompletas", () => {
  it("Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias", () => {
    cy.get(signUp).click();
    cy.get(nameUser).type(junior);
    cy.get(lastName).type();
    cy.get(userName).type(juju);
    cy.get(passwordEnter).type(123);
    cy.get(confirmPassword).type(1234);
    cy.get(login).click();
  });
});
