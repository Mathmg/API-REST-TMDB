import axios from 'axios';

const TMDB_TOKEN = process.env.TMDB_ACCESS_TOKEN;

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${TMDB_TOKEN}`
  }
});