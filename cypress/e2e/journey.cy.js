describe("app landing page", () => {
  it("should say enter your text here", () => {
    // Arrange
    cy.visit("/");

    // Act
    cy.get("input").type("Enter your text here");

    // Assert
    cy.findByTestId("input").should("contain.text", "Enter your name here!");
  });
});
