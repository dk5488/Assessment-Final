import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',  // Change this to your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
