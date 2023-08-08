import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const FileUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [handleName, setHandleName] = useState("");
  const [text, setText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const colors = [
    { id: 1, name: "red", hex: "#FF0000" },
    { id: 2, name: "green", hex: "#008000" },
    { id: 3, name: "orange", hex: "#FFA500" },
    { id: 4, name: "white", hex: "#FFFFFF" },
  ];

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };

  const handleTextChange = (event) => {
    event.preventDefault();
    const pdfText = event.target.value;
    setText(pdfText);
  };

  const handleProfilePictureChange = (event) => {
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
    if (backgroundColor) {
      document.body.style.backgroundColor = backgroundColor;
    }
    if (textColor) {
      document.body.style.color = textColor;
    }
  }, [selectedImage, backgroundColor, textColor]);

  return (
    <Stack>
      {imageUrl && selectedImage && (
        <Stack direction="row" textAlign="center">
          <Avatar
            sx={{ width: 56, height: 56 }}
            src={imageUrl}
            alt={selectedImage.name}
          />
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
          onChange={handleProfilePictureChange}
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
        <Box mt={2}>
          <FormControl fullWidth>
            <InputLabel id="background-color-select-label">
              Background Color
            </InputLabel>
            <Select
              labelId="background-color-select-label"
              id="background-color-select"
              value={backgroundColor}
              label="Background Color"
              onChange={handleBackgroundColorChange}
            >
              {colors.map((bgColor) => {
                return (
                  <MenuItem key={bgColor.id} value={bgColor.hex}>
                    {bgColor.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Box mt={2}>
          <FormControl fullWidth>
            <InputLabel id="text-color-select-label">Text Color</InputLabel>
            <Select
              labelId="text-color-select-label"
              id="text-color-select"
              value={textColor}
              label="Text Color"
              onChange={handleTextColorChange}
            >
              {colors.map((textColor) => {
                return (
                  <MenuItem key={textColor.id} value={textColor.hex}>
                    {textColor.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Stack>
  );
};

export default FileUpload;
