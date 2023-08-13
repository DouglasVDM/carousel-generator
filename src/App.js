import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Pdf from "./components/Pdf";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div data-testid="container" className="container">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/parent">Pdf Component</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/parent" exact element={<Pdf />} />
          <Route path="/parent/:id" element={<FileUpload />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
