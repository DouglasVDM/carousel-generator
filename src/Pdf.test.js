import { fireEvent, render, screen } from "@testing-library/react";

import Pdf from "./Pdf";

describe("Pdf component", () => {
  it("updates its value when the user types", () => {
    // Arrange
    render(<Pdf />);
    const element = screen.getByTestId("pdf");

    // Act
    fireEvent.change(element, { target: { value: "Hello, TDD!" } });

    // Assert
    expect(element.value).toBe("Hello, TDD!");
  });
});
