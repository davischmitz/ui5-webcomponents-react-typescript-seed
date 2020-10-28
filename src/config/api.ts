import axios from 'axios';

const baseURL = 'base-url';

export const api = axios.create({
  baseURL,
});
