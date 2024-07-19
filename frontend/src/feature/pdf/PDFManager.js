import React, { useState } from 'react';
import PDFList from './PDFList';
import PDFUpload from './PDFUpload';

const PDFManager = () => {
  const [refresh, setRefresh] = useState(false);

  const handleUploadSuccess = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <PDFUpload onUploadSuccess={handleUploadSuccess} />
      <PDFList key={refresh} />
    </div>
  );
};

export default PDFManager;