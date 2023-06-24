import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_MARVEL_API_BASE_URL}?ts=${process.env.NEXT_PUBLIC_MARVEL_API_TIMESTAMPS}&apikey=${process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY}&hash=${process.env.NEXT_PUBLIC_MARVEL_API_HASH}`,
});
