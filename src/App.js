import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Pdf from "./components/Pdf";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div data-testid="container" className="container">
      <Pdf/>
    </div>
  );
};

export default App;
