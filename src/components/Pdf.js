
import React, { useState } from "react";
import FileUpload from "./FileUpload";
import { Box, TextField } from "@mui/material";

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
      <Box>
        <TextField
          data-testid="pdf"
          id="outlined-basic"
          label="Enter your text"
          variant="outlined"
          type="text"
          name="input-text"
          value={text}
          onChange={handleChange}
          placeholder="Enter your text here"
        />
      </Box>
    </div>
  );
};

export default Pdf;
