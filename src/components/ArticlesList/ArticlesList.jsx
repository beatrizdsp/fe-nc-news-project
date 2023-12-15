import ArticleCard from "../ArticlesCard/ArticleCard"
import {getArticles} from '../../api'
import {useState,useEffect} from 'react'
import CustomErrors from "../CustomErrors/CustomErrors";


function ArticlesList({query,searchParams,setSearchParams}){
const [isLoading, setIsLoading] = useState(true);
const [articles,setArticles] = useState([])
const [error,setError]=useState()

    useEffect(() => {
      setIsLoading(true)
        getArticles(query).then((articles) => {
          setIsLoading(false)
          setArticles(articles)
        }).catch((err)=>{
            setIsLoading(false);
            if (err.response) {
              const { status, data } = err.response;
              
              setError({
                message: data.msg,
                status: status,
              });
            }
          })
      },[query]);

      if(isLoading){
        return <p>Page is loading...</p>
      }
      if(error){
        return(
          <CustomErrors 
          message={error.message}
          status={error.status} 
          />
        )
      } else{

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

}

export default ArticlesList