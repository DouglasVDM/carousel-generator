import React, { useState } from "react";
import FileUpload from "./FileUpload";
import { Link } from "react-router-dom";

const Pdf = () => {
  const [numberOfComponents, setNumberOfComponents] = useState(0);

  const handleAddComponent = () => {
    setNumberOfComponents(numberOfComponents + 1);
  };

  const componentList = [];
  for (let index = 1; index <= numberOfComponents.length; index++) {
    componentList.push(<FileUpload key={index} id={index} />);
  }

  return (
    <div className="input-container">
      <Pdf Component />
      <br />
      <p>Number of FileUpload components: {numberOfComponents}</p>
      <br />
      <button onClick={handleAddComponent}>Add Component</button>
      {[...Array(numberOfComponents)].map((_, index) => {
        <FileUpload key={index} />;
      })}
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Pdf;

// {numberOfComponents.map((component, index) => {
//   <li key={index}>
//     <Link to={`/parent/${index}`}>
//       <FileUpload /> {index}
//     </Link>
//   </li>;
// })}
