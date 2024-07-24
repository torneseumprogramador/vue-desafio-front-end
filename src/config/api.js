import axios from 'axios';

const API = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use(config => {
  // const token = localStorage.getItem('token'); // Supondo que o token esteja armazenado no localStorage
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIxODE0NDA2LCJleHAiOjE3MjE5MDA4MDZ9.f48QuVkE7Cbk6RucnVmBinY1BT1Ryw33O5WTZwsLyd4"
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});


export default API;
