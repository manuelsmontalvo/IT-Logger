import axios from 'axios'

let apiUrl

const apiUrls = {
    production: 'https://manuels-it-logger.herokuapp.com/ ',
    development: 'http://localhost:5000/api'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
    baseURL: apiUrl
})

export default api