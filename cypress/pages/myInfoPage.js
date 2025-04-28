class MyInfoPage {
  selectorslist() {
    const selector = {
      myInfoButon: "[href='/web/index.php/pim/viewMyDetails']",
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateFiel: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      sumitButton: "[type='submit']",
      generiCombobox: ".oxd-select-text--arrow",
      nationality: ".oxd-select-dropdown > :nth-child(2)",
      marital: ".oxd-select-dropdown > :nth-child(3)",
    };
    return selector;
  }

  fillPersonalDetails(firstName, lastName, nickName) {
    cy.get(selectorsList.firstNameField).clear().type(firstName);
    cy.get(selectorsList.lastNameField).clear().type(lastName);
    cy.get(selectorsList.genericField).eq(3).clear().type(nickName);
  }

  fillEmployeeDetails(employeeId, otherId, driversLicenseDatee) {
    cy.get(selectorsList.genericField).eq(3).clear().type(employeeId);
    cy.get(selectorsList.genericField).eq(4).clear().type(otherId);
    cy.get(selectorsList.genericField).eq(5).clear().type(driversLicenseDatee);
    cy.get(selectorsList.genericField).eq(6).clear().type();
  }

  saveForm() {
    cy.get(selectorsList.sumitButton).eq(0).click();
  }
  fillStatus() {
    cy.get(selectorsList.generiCombobox).eq(1).click({ force: true });
    cy.get(selectorsList.marital).click();
  }
}

export default MyInfoPage;
