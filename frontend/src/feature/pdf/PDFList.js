import React, { useState, useEffect } from 'react';
import { listPDFs, deletePDF } from '../../services/pdfService';
import { Link } from "react-router-dom";


const PDFList = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    fetchPDFs();
  }, []);

  const fetchPDFs = async () => {
    const data = await listPDFs();
    setPdfs(data);
  };

  const handleDelete = async (id) => {
    await deletePDF(id);
    fetchPDFs();
  };

  return (
    <div>
      <h2>Hợp đồng</h2>
      <td><Link to="/admin"><button type="button" className="btn btn-primary">Trang chủ ADMIN</button></Link></td>

      <ul>
        {pdfs.map((pdf) => (
          <li key={pdf._id}>
            {pdf.name}    
            <button onClick={() => handleDelete(pdf._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;