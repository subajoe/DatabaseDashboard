import React, { useRef } from "react";

const FileUpload = () => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div>
      {/* Image button */}
      <img
        src="https://via.placeholder.com/150"
        alt="Upload"
        style={{ cursor: "pointer" }}
        onClick={handleImageClick}
      />

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
