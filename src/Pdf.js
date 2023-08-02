import React, { useState } from "react";

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
    <div>
      <input
        data-testid="pdf"
        type="text"
        name="input-text"
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here"
      />
      <h1>{text}</h1>
    </div>
  );
};

export default Pdf;
