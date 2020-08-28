import React, { useState } from "react";
import fileService from "../api/fileService";

export const FileUploader = () => {
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("Choose image to upload");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    await fileService.uploadFile(formData);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input
            type="file"
            class="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <input
          type="submit"
          value="Upload"
          className="btn, btn-primary btn-block mt-3"
        />
      </form>
    </>
  );
};
