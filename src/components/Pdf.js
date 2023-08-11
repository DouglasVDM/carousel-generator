import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileUpload from "./FileUpload";

const Pdf = () => {
  const [duplicatedComponents, setDuplicatedComponents] = useState([]);

  const handleDuplicate = () => {
    const newComponent = <FileUpload />;
    setDuplicatedComponents([...duplicatedComponents, newComponent]);
  };

  return (
    <div className="input-container">
      <FileUpload />
      <br />
      <button onClick={handleDuplicate}>Duplicate Component</button>
      {duplicatedComponents.map((component, index) => {
        <li key={index}>
          <Link to={`/parent/${index}`}>
            <FileUpload /> {index}
          </Link>
        </li>;
      })}
    </div>
  );
};

export default Pdf;
