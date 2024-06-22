import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user/';

const getUserContracts = (token) => {
  return axios.get(API_URL + 'contracts', {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default {
  getUserContracts,
};