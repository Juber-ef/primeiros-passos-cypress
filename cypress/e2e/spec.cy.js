import userData from "../fixtures/user-data.json";

describe("Orange HRM Tests", () => {
  const selectorsList = {
    usernameField: "[name= 'username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredential: "['role='alert']",
    myInfoButon: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateFiel: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    sumitButton: "[type='submit']",
  };

  it.only("User Info Update - Sucess", () => {
    cy.visit("auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardGrid);
    cy.get(selectorsList.myInfoButon).click();
    cy.get(selectorsList.firstNameField).clear().type("Test");
    cy.get(selectorsList.lastNameField).clear().type("LastNameTest");
    cy.get(selectorsList.genericField).eq(3).clear().type("E");
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherIdTeste");
    cy.get(selectorsList.genericField).eq(5).clear().type("DriverLicenseTest");
    cy.get(selectorsList.genericField).eq(6).clear().type("1988-02-01");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.sumitButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
    cy.get(".oxd-toast-close");
  });
});
