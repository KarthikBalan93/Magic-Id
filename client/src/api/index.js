import axios from 'axios';
const API_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001'
console.log(API_URL)
const instance = axios.create({
    baseURL: API_URL + '/api',
    timeout: 60000,
    headers: {
        "Content-Type": "application/json"
    }
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.error('API Request Error: ', error);
        return Promise.reject(error)
    }
);

instance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        console.error('API Response Error:', error);

        if (error.response) {
            console.error('Response Data:', error.response.data);
            console.error('Response Status:', error.response.status);
            console.error('Response Headers:', error.response.headers);
        } else if (error.request) {
            console.error('Request Data:', error.request);
        } else {
            console.error('Error Message:', error.message);
        }

        return Promise.reject(error);
    }
);

const api = {
    get: (url, config) => instance.get(url, config),
    post: (url, data, config) => instance.post(url, data, config)
  };
  
  export default api;