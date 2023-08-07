import { Avatar, Box, Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const FileUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [handleName, setHandleName] = useState("");

  const [text, setText] = useState("");

  // const onSubmit = ()=>{
  // }:

  const handleTextChange = (event) => {
    event.preventDefault();
    const pdfText = event.target.value;
    setText(pdfText);
  };

  const handleChange = (event) => {
    console.log(event.target.files[0]);
    const profilePicture = event.target.files[0];
    setSelectedImage(profilePicture);
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    console.log("name; ", handleName);
    setHandleName(event.target.value);
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      {imageUrl && selectedImage && (
        <Stack direction="row" textAlign="center">
          <Avatar sx={{width:56, height:56}} src={imageUrl} alt={selectedImage.name} />
          <h3>{handleName}</h3>
        </Stack>
      )}
      <h1>{text}</h1>
      <Box>
        <TextField
          data-testid="file-input"
          label="Enter your handle name"
          variant="outlined"
          accept="image/jpeg,image/png"
          type="file"
          id="select-image"
          name="select-image"
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <label htmlFor="select-image">
          <Button variant="contained" color="primary" component="span">
            Upload Image
          </Button>
        </label>
        <Box mt={2}>
          <TextField
            data-testid="pdf"
            id="outlined-basic"
            label="Enter your handle name"
            variant="outlined"
            type="text"
            name="input-text"
            value={handleName}
            onChange={handleNameChange}
            placeholder="Enter your name here"
          />
        </Box>
        <Box mt={2}>
          <TextField
            data-testid="pdf"
            id="outlined-basic"
            label="Enter your text"
            variant="outlined"
            type="text"
            name="input-text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter your text here"
          />
        </Box>
      </Box>
    </>
  );
};

export default FileUpload;
