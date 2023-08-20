import React from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";
import withDuplicateAndNavigation from "./components/withDuplicateAndNavigation";

const DuplicateAndNavigationFileUpload = withDuplicateAndNavigation(FileUpload);

function App() {
  return (
    <div data-testid="container" className="container">
      <DuplicateAndNavigationFileUpload />
    </div>
  );
};

export default App;
