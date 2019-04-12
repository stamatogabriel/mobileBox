import axios from 'axios';

const api = axios.create({
    baseURL: 'https://boxbackend.herokuapp.com/'
});

export default api;