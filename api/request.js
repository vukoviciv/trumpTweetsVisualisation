import axios from 'axios';
import { BASE_URL } from '../config/config'

const req = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

export default req;
