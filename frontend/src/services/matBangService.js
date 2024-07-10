import axios from 'axios';

const API_URL = 'http://localhost:5000/api/matbang';

export const getAllMatBang = () => axios.get(API_URL);
export const createMatBang = (matBang) => axios.post(API_URL, matBang);
export const updateMatBang = (id, matBang) => axios.put(`${API_URL}/${id}`, matBang);
export const deleteMatBang = (id) => axios.delete(`${API_URL}/${id}`);

export const getMatBangCount = () => axios.get(`${API_URL}/matbang-count`);

export const getMatBangById = (id) => axios.get(`${API_URL}/${id}`);

