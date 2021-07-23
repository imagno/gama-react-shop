import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pastebin.com/raw/S6pPcWwH'
})

export default api;
