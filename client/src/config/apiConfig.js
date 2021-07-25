import axios from 'axios';

let apiUrl;

const apiUrls = {
    production: 'https://manuels-it-logger-server.herokuapp.com/api',
};

apiUrl = apiUrls.production;

const api = axios.create({
    baseURL: apiUrl,
});

export default api;
