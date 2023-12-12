import ArticleCard from "../ArticlesCard/ArticleCard"
import {getArticles} from '../../api'
import {useState,useEffect} from 'react'


function ArticlesList(){
const [isLoading, setIsLoading] = useState(true);
const [articles,setArticles] = useState([])

    useEffect(() => {
        getArticles().then((articles) => {
          setArticles(articles)
          setIsLoading(false)
        });
      });

      if(isLoading){
        return <p>Page is loading...</p>
      }


    return (
       <div>
        ArticlesList
        <ul>
            {articles.map((article)=>{
                return (
                    <ArticleCard article={article} key={article.article_id}/>
                )
            })}
        </ul>
        </div>
        )
}

export default ArticlesList