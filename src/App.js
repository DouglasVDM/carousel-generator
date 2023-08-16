import { useState } from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";

import Pdf from "./components/Pdf";

function App() {
  const [duplicatedComponents, setDuplicatedComponents] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDuplicate = () => {
    const newComponent = <FileUpload />;
    console.log("duplicated components b4: ", duplicatedComponents);

    setDuplicatedComponents([...duplicatedComponents, newComponent]);
    console.log("duplicated components after: ", duplicatedComponents);
  };

  return (
    <div data-testid="container" className="container">
      <br />
      <button onClick={() => handleDuplicate()}>Duplicate Component</button>
      {duplicatedComponents.map((component, index) => {
        console.log(component);
        const isHighlighted = index === selectedIndex;
        return setSelectedIndex(component, isHighlighted);
      })}
      <hr />
      <button
        onClick={() => {
          setSelectedIndex((index) => (index + 1) % duplicatedComponents.length);
        }}
      >
        Next
      </button>
      <Pdf
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
