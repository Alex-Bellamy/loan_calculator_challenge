describe("Visitor can calculate their total loan liability", () => {
  it("successfully", () => {
    cy.visit("/");

    cy.get("[data-cy=loanForm]").within(() => {
      cy.get("[data-cy=creditorName]").type("ICA");
      cy.get("[data-cy=loanAmount]").type("36000");
      cy.get("[data-cy=monthlyFees]").type("50");
      cy.get("[data-cy=apr]").type("7.54");
    });
    cy.get("[data-cy=button]").contains("Save").click();

    cy.get("[data-cy=loanTotals]").within(() => {
      cy.get("[data-cy=totalLoanAmount]").should("contain", "36000");
      cy.get("[data-cy=totalMonthlyFees]").should("contain", "50");
      cy.get("[data-cy=totalApr]").should("contain", "7.54");
    });
  });
});