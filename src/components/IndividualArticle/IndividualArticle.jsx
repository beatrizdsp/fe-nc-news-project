import {useState,useEffect} from 'react' 
import {useParams} from 'react-router-dom'
import { getArticlesById } from '../../api'

 function IndividualArticle(){
    const {article_id} = useParams()
    const [isLoading,setIsLoading] = useState(false)
const [currArticle, setCurrArticle] = useState({})
     useEffect(()=>{
        setIsLoading(true)
        getArticlesById(article_id).then((article)=>{
            setIsLoading(false)
            setCurrArticle(article)
        })
     },[article_id])

     const { title, topic, author, body, article_img_url, comment_count, votes} =
     currArticle;

     if(isLoading){
        return <p>Page is loading...</p>
      }

      return(
        <div className='individual-article'>
            <article>
                <header>
            <h3>{topic}</h3>
            <h4>Written by: {author}</h4>
                </header>
            <h2>{title}</h2>
            <img src={article_img_url}
            alt={`Image of ${title}`}
            />
            <section>
            <p>{body}</p>
            </section>
            <p>Votes: {votes}</p>
            <p>Total Comments: {comment_count}</p>
            </article>
        </div>
      )

 }

 export default IndividualArticle