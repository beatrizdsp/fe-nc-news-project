function ArticleCard({article}){
    return (
       <>
        <article >
            <li><img 
            src={article.article_img_url}
            alt={`Image from ${article.title}`}
            /></li>
            <li><h3>{article.title}</h3></li>
            <li><p>{article.author}</p></li>
            <li><p>{article.topic}</p></li>
        </article>
        </>
        )
}

export default ArticleCard