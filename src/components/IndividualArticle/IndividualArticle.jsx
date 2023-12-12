import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById,getCommentsById } from "../../api";
import { Link } from "react-router-dom";
import CommentList from "../CommentList/CommentList";

function IndividualArticle() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [currArticle, setCurrArticle] = useState({});

  const [articleComments, setArticleComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticlesById(article_id).then((article) => {
      setIsLoading(false);
      setCurrArticle(article);
    });
  }, [article_id]);

  useEffect(() => {
    getCommentsById(article_id).then((comments) => {
      setArticleComments(comments);
    });
  }, [article_id]);

  const { title, topic, author, body, article_img_url, comment_count, votes } =
    currArticle;

  if (isLoading) {
    return <p>Page is loading...</p>;
  }

  return (
    <div className="individual-article">
      <article>
        <header>
          <h3>{topic}</h3>
          <h4>Written by: {author}</h4>
        </header>
        <h2>{title}</h2>
        <img src={article_img_url} alt={`Image of ${title}`} />
        <section>
          <p>{body}</p>
        </section>
        <p>Votes: {votes}</p>
        <div className="comment-list">
        <p>Total Comments: {comment_count}</p>
          <CommentList key={article_id} articleComments={articleComments} />
        </div>
      </article>
      <Link to={"/articles"}>
        <button>Back to articles</button>
      </Link>
    </div>
  );
}

export default IndividualArticle;
