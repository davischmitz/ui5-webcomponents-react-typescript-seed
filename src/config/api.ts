import axios from 'axios';

const baseURL: string = 'base-url';

export const api = axios.create({
  baseURL,
});
