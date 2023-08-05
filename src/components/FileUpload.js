import React, { useEffect, useState } from "react";

const FileUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = (event) => {
    console.log(event.target.files[0]);
    const profilePicture = event.target.files[0];
    setSelectedImage(profilePicture);
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <div>
        {imageUrl && selectedImage && (
          <>
            <h4> Image Preview:</h4>
            <img src={imageUrl} alt={selectedImage.name} />
          </>
        )}
      </div>
      <div>
        <input
          data-testid="file-input"
          accept="image/jpeg,image/png"
          type="file"
          id="select-image"
          name="select-image"
          // style={{ display: "none" }}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default FileUpload;
