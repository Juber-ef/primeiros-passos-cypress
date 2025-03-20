import { cyan } from "colorette";

class MenuPage {
  selectorsList() {
    const selectors = {
      myInfoButon: "[href='/web/index.php/pim/viewMyDetails']",
      adminButon: "[href='/web/index.php/admin/viewAdminModule']",
      pimButon: "[href='/web/index.php/pim/viewPimModule']",
      leaveButon: "[href='/web/index.php/leave/viewLeaveModule']",
      timeButon: "[href='/web/index.php/time/viewTimeModule']",
      recruitmentButon:
        "[href='/web/index.php/recruitment/viewRecruitmentModule']",
      performanceButon:
        "[href='/web/index.php/performance/viewPerformanceModule']",
      dashboardButon: "[href='/web/index.php/dashboard/index']",
      directoryButon: "[href='/web/index.php/dashboard/index']",
      claimButon: "[href='/web/index.php/claim/viewClaimModule']",
    };
  }
  accessMyInfo() {
    cy.get(this.selectorsList().myInfoButon.click());
  }
  accessAdminButon() {
    cy.get(this.selectorsList().adminButon.click());
  }
  accessPimButon() {
    cy.get(this.selectorsList().pimButon.click());
  }
  accessLeaveButon() {
    cy.get(this.selectorsList().leaveButon.click());
  }
  accessRecruitment() {
    cy.get(this.selectorsList().recruitmentButon.click());
  }
  accessPerformance() {
    cy.get(this.selectorsList().performanceButon.click());
  }
  accessDashboard() {
    cy.get(this.selectorsList().dashboardButon.click());
  }
  accessDirectory() {
    cy.get(this.selectorsList().directoryButon.click());
  }
  accessClaim() {
    cy, get(this.selectorsList().claimButon.click());
  }
}

export default MenuPage;
