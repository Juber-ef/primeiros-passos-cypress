import userData from "../fixtures/user-data.json";
import loginPage from "../pages/loginPage.js";
import dashboardPage from "../pages/dashboardPage.js";
import MyInfoPage from "../pages/myInfoPage.js";
import MenuPage from "../pages/menuPage.js";

const LoginPage = new loginPage();
const DashboardPage = new dashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("Orange HRM Tests", () => {
  it.only("User Info Update - Sucess", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.checkDashboardPage();

    MenuPage.accessMyinfo();

    MyInfoPage.fillPersonalDetails("First Name", "Last Name", "nickName");
    MyInfoPage.fillEmployDetails("EmployId", "otherId", "2025-07-29");
    MyInfoPage.fillStatus();
    MyInfoPage.saveForm();
  });

  it("Login - Fail", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
