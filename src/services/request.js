import axios from 'axios';
import * as env from '../env.json';

const request = axios.create({
  baseURL: env.API_URL
});

export default request;
