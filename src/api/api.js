import axios from 'axios';

const api = axios.create({
    baseURL: 'http://bbb21/index.php/wp-json/wp/v2/'
});

export default api;