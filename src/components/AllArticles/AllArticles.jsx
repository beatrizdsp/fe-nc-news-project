import { useSearchParams } from "react-router-dom"
import ArticlesList from "../ArticlesList/ArticlesList"
import ArticlesByTopic from "../ArticlesByTopic/ArticlesByTopic"


function AllArticles(){
    const [searchParams,setSearchParams]=useSearchParams()
    return (
       <>
        <h2> AllArticles</h2>
        <ArticlesByTopic/>
        <ArticlesList searchParams={searchParams} setSearchParams={setSearchParams}/>
        </>
        )
}

export default AllArticles