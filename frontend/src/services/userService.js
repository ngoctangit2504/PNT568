import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user/';

const getUserContracts = (token) => {
  return axios.get(API_URL + 'contracts', {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAllUser = () => axios.get(API_URL);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);

export const getUserCount = () => axios.get(`${API_URL}/user-count`);


export default {
  getUserContracts,
};