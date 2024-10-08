import axios from 'axios';

const API_URL = '/api/artworks';  // Proxy in package.json handles localhost:8080

// Get all artworks
const getAllArtworks = () => {
  return axios.get(API_URL);
};

// Add a new artwork
const createArtwork = (artwork) => {
  return axios.post(API_URL, artwork);
};

// Get an artwork by ID
const getArtworkById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Delete an artwork by ID
const deleteArtworkById = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getAllArtworks,
  createArtwork,
  getArtworkById,
  deleteArtworkById,
};
