class loginPage {
  selectorsList() {
    const selectors = {
      usernameField: "[name= 'username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      wrongCredential: "['role='alert']",
    };
    return selectors;
  }

  accessLoginPage() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  loginWithUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().loginButton).click();
  }
}
export default loginPage;
