import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';  // Include backend's port
 // Assuming your backend has these endpoints

// Register a new user with name, email, username, password, and role
const register = (name, email, username, password, role) => {
  return axios.post(`${API_URL}/register`, { name, email, username, password, role });
};

// Login the user
const login = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password });
};

// Logout by removing the token from local storage
const logout = () => {
  localStorage.removeItem('user');
};

// Get the current user from local storage
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
