import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const AuthService = {
  register(name, email, password) {
    return axios.post(`${API_URL}/register`, { name, email, password });
  },

  login(email, password) {
    return axios.post(`${API_URL}/login`, { email, password }).then(response => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
  },

  getCurrentUser: async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    }
    const response = await fetch("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const user = await response.json();
      return user;
    } else {
      return null;
    }
  },

  logout() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      const token = user.token;
    return axios.post(`${API_URL}/logout`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {
      localStorage.removeItem('user');
    });
    } else {
      localStorage.removeItem('user');
      return Promise.resolve();
    }
    
  },

  getUserById(userId, token) {
    return axios.get(`${API_URL}/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => response.data);
  }
};



export default AuthService;