describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get("never-there", { timeout: 600_000 }).should("be.visible"); // just a spec running for 10min
  });
});
