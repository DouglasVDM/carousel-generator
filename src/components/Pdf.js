import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileUpload from "./FileUpload";

const Pdf = ({ setDuplicatedComponents, components, renderItem }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDuplicate = () => {
    const newComponent = <FileUpload />;
    console.log("duplicated components b4: ", components);
    setDuplicatedComponents([...components, newComponent]);
    console.log("duplicated components after: ", components);
  };

  return (
    <div className="input-container">
      {/* <FileUpload /> */}
      <br />
      <button onClick={()=>handleDuplicate()}>Duplicate Component</button>
      {components.map((component, index) => {
        console.log(component);
        const isHighlighted = index === selectedIndex;
        return renderItem(component,isHighlighted);
      })}
      <hr />
      <button
        onClick={() => {
          setSelectedIndex((index) => (index + 1) % components.length);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pdf;
