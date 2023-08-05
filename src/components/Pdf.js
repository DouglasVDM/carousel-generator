
import React, { useState } from "react";
import FileUpload from "./FileUpload";

const Pdf = () => {
  const [text, setText] = useState("");

  // const onSubmit = ()=>{
  // }:

  const handleChange = (event) => {
    event.preventDefault();
    const pdfText = event.target.value;
    setText(pdfText);
  };

  return (
    <div className="input-container">
      <div>
        <FileUpload />
      </div>
      <div>
        <h1>{text}</h1>
      </div>
      <div>
        <input
          data-testid="pdf"
          type="text"
          name="input-text"
          value={text}
          onChange={handleChange}
          placeholder="Enter your text here"
        />
      </div>
    </div>
  );
};

export default Pdf;
