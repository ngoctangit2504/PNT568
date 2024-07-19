import axios from 'axios';


const API_URL = 'http://localhost:5000/pdfs';

export const listPDFs = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addPDF = async (formData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: formData,
  });
  return response.json();
};

export const deletePDF = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const getPDFCount = () => axios.get(`${API_URL}/pdf-count`);
