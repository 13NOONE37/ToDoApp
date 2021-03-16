import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_URL || 'http://192.168.8.144:3000/api/notes/'
});

export default instance;