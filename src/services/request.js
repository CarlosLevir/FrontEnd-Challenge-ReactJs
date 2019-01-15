import axios from 'axios';

const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export default request;
