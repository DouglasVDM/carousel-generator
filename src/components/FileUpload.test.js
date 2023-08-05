// I added an accept attribute to the file input element, which tells the browser to only display files that are of type image/jpeg.

// I also added a check in the handleFileSelect function to make sure the selected file is of type 'image/jpeg' before setting the state.

// In this way, I ensure that the user can only select JPEG files, and that the component only accepts and processes JPEG files, so I can be sure that I am working with the correct type of file.

import {
    render,
    screen,
    fireEvent,
    debug,
  } from "@testing-library/react";
  import FileUpload from "./FileUpload";
  
  describe("FileUpload", () => {
    it("should display the selected file name", async () => {
      // Arrange
      render(<FileUpload />);
      const fileInput = screen.getByTestId("file-input");
  
      const file = new File(["test file content"], "test.jpg", {
        type: "image/jpg",
      });
  
      // Act
      fireEvent.change(fileInput, { target: { files: [file] } });
  
      // Assert
      const fileName = screen.getByTestId("file-name");
      expect(fileName.textContent).toBe("test.jpg");
  
      it("should not display the selected file name and not call the onSubmit function when the file is not JPEG", async () => {
        // Arrange
        const onSubmit = jest.fn();
        render(<FileUpload onSubmit={onSubmit} />);
  
        // Act
        const fileInput = screen.getByTestId("file-input");
  
        const file = new File(["test file content"], "test.txt", {
          type: "text/plain",
        });
  
        fireEvent.change(fileInput, { target: { files: [file] } });
  
        const submitButton = screen.getByTestId("submit-button");
        fireEvent.click(submitButton);
  
        // Assert
        const fileName = screen.getByTestId("file-name");
        expect(fileName).toBe(null);
        expect(onSubmit).not.toHaveBeenCalled();
      });
  
      it("should call the onSubmit function when the form is submitted", async () => {
        // Arrange
        const onSubmit = jest.fn();
        render(<FileUpload onSubmit={onSubmit} />);
  
        // Act
        const fileInput = screen.getByTestId("file-input");
  
        const file = new File(["test file content"], "test.jpg", {
          type: "image/jpeg",
        });
  
        fireEvent.change(fileInput, { target: { files: [file] } });
  
        const submitButton = screen.getByTestId("submit-button");
        fireEvent.click(submitButton);
  
        // Assert
        expect(onSubmit).toHaveBeenCalled();
        debug();
      });
    });
  });
  