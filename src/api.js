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

  export const getArticlesById = (article_id) => {
    return ncnews
      .get(`/articles/${article_id}`)
      .then(({ data: { article } }) => {
        return article;
      });
  };

  export const getCommentsById = (article_id) =>{
    return ncnews
    .get(`/articles/${article_id}/comments`)
    .then(({data:{comments}})=>{
        return comments
    })
  }

  export const patchArticleVotes = (article_id,article)=>{
    return ncnews
    .patch(`/articles/${article_id}`, article)
  }

  export const postComment = (article_id,username,body) =>{
    return ncnews
    .post(`/articles/${article_id}/comments`,{username:username, body:body})
    .then(({data})=>{
        return data
    })
  }

  export const deleteComment = (comment_id)=>{
return ncnews
.delete(`/comments/${comment_id}`)
  }