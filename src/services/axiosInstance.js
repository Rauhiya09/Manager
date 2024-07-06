import axios from 'axios';

// Create an axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Set your backend API base URL here
    headers: {
        'Content-Type': 'application/json'
    }
});

// Optionally, add interceptors to handle requests and responses
axiosInstance.interceptors.request.use(
    (config) => {
        // Modify request config before sending the request
        // For example, you can add authorization headers here if you have a token
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        // Modify response data here if needed
        return response;
    },
    (error) => {
        // Handle response errors
        return Promise.reject(error);
    }
);

export default axiosInstance;