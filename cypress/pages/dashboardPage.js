class dashboardPage {
  selectorlist() {
    const selectors = {
      dashboardGrid: ".orangehrm-dashboard-grid",
    };
    return selectors;
  }

  accessDashboard() {
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");

    cy.get(this.selectorlist().dashboardGrid).should("be.visible");
  }
}
export default dashboardPage;
