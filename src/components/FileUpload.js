
import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const FileUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [handleName, setHandleName] = useState("");

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
        <Box mt={2} textAlign="center">
          <h4> Image Preview: {selectedImage.name}</h4>
          <img src={imageUrl} alt={selectedImage.name} height="100px" />
        </Box>
      )}

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
        <h3>Handle Name: {handleName}</h3>

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
    </>
  );
};

export default FileUpload;
