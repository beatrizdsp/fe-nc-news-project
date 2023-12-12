import { Link} from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <>
      <article className="article" key={article.article_id}>
        < Link to= {`/articles/${article.article_id}`}>      
        <header className="article-header">
          <li><h3 className="hover-title">{article.title}</h3></li>

          <li>
            <p>{article.author}</p>
          </li>
        </header>

        <li>
          <img
            src={article.article_img_url}
            alt={`Image from ${article.title}`}
            role="link"
            />
        </li>
        <li>
          <p>{article.topic}</p>
        </li>
            </Link>
      </article>
    </>
  );
}

export default ArticleCard;
