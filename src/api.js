import axios from 'axios'

const ncnews = axios.create({
    baseURL: "https://nc-news-qmmk.onrender.com/api",
  });

  export const getArticles = () => {
    return ncnews
      .get("/articles")
      .then(({ data: { articles } }) => {
        return articles;
      });
  };

  export const getArticlesById = (articleid) => {
    return ncnews
      .get("/articles")
      .then(({ data: { articles } }) => {
        return articles;
      });
  };