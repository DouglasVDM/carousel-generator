import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileUpload from "./FileUpload";

const Pdf = ({ components }) => {
  return (
    <div className="input-container">
      <FileUpload />
    </div>
  );
};

export default Pdf;
