const API_KEY = 'ca4896a32b1047fbbdf0d6a71c03a2fb';

export interface Articles {
  author: string;
  content: string;
  description: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

type SetArticles = (articles: Articles[]) => void;

export const getData = async (category: string, setArticles: SetArticles) => {
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    setArticles(data.articles);
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};
