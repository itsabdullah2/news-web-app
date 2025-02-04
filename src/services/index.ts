const API_KEY = import.meta.env.VITE_API_KEY;

export const getData = async (category: string) => {
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
};
