import React, { useState } from 'react';
import { addPDF } from '../../services/pdfService';

const PDFUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('pdf', file);

    await addPDF(formData);
    onUploadSuccess();
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button type="submit">Upload PDF</button>
    </form>
  );
};

export default PDFUpload;