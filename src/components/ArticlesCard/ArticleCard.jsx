import { useNavigate } from "react-router-dom";

function ArticleCard({ article }) {
  const navigate = useNavigate();
  return (
    <>
      <article className="article" key={article.article_id}>
        <header className="article-header">
          <li>
            <h3 className="hover-title">
              <a
                onClick={() => {
                  navigate(`/articles/${article.article_id}`);
                }}
                role="link"
              >
                {article.title}
              </a>
            </h3>
          </li>

          <li>
            <p>{article.author}</p>
          </li>
        </header>

        <li>
          <img
            onClick={() => {
              navigate(`/articles/${article.article_id}`);
            }}
            src={article.article_img_url}
            alt={`Image from ${article.title}`}
            role="link"
          />
        </li>
        <li>
          <p>{article.topic}</p>
        </li>
      </article>
    </>
  );
}

export default ArticleCard;
