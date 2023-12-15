import ArticleCard from "../ArticlesCard/ArticleCard"
import {getArticles} from '../../api'
import {useState,useEffect} from 'react'


function ArticlesList({query,searchParams,setSearchParams}){
const [isLoading, setIsLoading] = useState(true);
const [articles,setArticles] = useState([])

    useEffect(() => {
      setIsLoading(true)
        getArticles(query).then((articles) => {
          setIsLoading(false)
          setArticles(articles)
        });
      },[query]);

      if(isLoading){
        return <p>Page is loading...</p>
      }


    return (
       <div>
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