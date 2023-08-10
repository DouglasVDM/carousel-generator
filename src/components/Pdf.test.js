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

  // Arrange: Render the Pdf component
  // Act: None
  // Assert: Check that the navigation buttons are rendered correctly
  it("renders navigation buttons", () => {
    render(<Pdf />);
    const addButton = screen.getByRole("button", { name: "Add Component" });
    expect(addButton).toBeInTheDocument();

    const previousButton = screen.getByRole("button", { name: "Previous" });
    expect(previousButton).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton).toBeInTheDocument();
  });

  // Arrange: Render the Pdf component
  // Act: Click the "Add Component" button
  // Assert: Check that a new component is added to the screen
  it("adds a new component on button click", () => {
    render(<Pdf />);
    const addButton = screen.getByRole("button", { name: "Add Component" });
    fireEvent.click(addButton);

    const component = screen.getByRole("my-component");
    expect(component).toBeInTheDocument();
  });

  // Arrange: Render the Pdf component and add a new component
  // Act: Click the "Previous" button
  // Assert: Check that the previous component is displayed
  it("navigates to previous component on previous button click", () => {
    render(<Pdf />);
    const addButton = screen.getByRole("button", { name: "Add Component" });
    fireEvent.click(addButton);

    const previousButton = screen.getByRole("button", { name: "Previous" });
    fireEvent.click(previousButton);

    const component = screen.getByRole("my-component");
    expect(component).toBeInTheDocument();
  });

  // Arrange: Render the Pdf component and add a new component
  // Act: Click the "Next" button
  // Assert: Check that the next component is displayed
  it("navigates to next component on next button click", () => {
    render(<Pdf />);
    const addButton = screen.getByRole("button", { name: "Add Component" });
    fireEvent.click(addButton);

    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);

    const component = screen.getByRole("my-component");
    expect(component).toBeInTheDocument();
  });
});
