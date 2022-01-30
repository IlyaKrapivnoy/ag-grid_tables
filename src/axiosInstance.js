import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: {
    //     'app-id': '',
    // },
});

export default instance;
