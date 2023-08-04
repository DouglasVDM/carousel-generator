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
      <div>
        <label for="avatar">Choose a profile picture:</label>

        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
      </div>
    </div>
  );
};

export default Pdf;
