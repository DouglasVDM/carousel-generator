it("should say Hello Worldenter your text here", () => {
  // Arrange
  cy.visit("/");

  // Act
  cy.get('input').type('Hello, World')

  // Assert
  cy.findByTestId("input").should("contain.text", "");
});
