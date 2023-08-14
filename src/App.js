import { useState } from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";

import Pdf from "./components/Pdf";

function App() {
  const [duplicatedComponents, setDuplicatedComponents] = useState([]);

  return (
    <div data-testid="container" className="container">
      <Pdf
        setDuplicatedComponents={setDuplicatedComponents}
        components={duplicatedComponents}
        renderItem={(duplicatedComponent, isHighlighted) => (
          <FileUpload
            key={duplicatedComponent.id}
            isHighlighted={isHighlighted}
          />
        )}
      />
    </div>
  );
}

export default App;
