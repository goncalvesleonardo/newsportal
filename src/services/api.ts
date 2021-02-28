import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/topstories/v2',
});

export default api;

export const apiKey = 't1WkFrCATInKmjzoIw7mRkA1MWhXw8IX';
