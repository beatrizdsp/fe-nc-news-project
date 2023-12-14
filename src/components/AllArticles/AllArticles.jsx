import { useSearchParams } from "react-router-dom"
import ArticlesList from "../ArticlesList/ArticlesList"
import ArticlesByTopic from "../ArticlesByTopic/ArticlesByTopic"
import RefineArticles from "../RefineArticles/RefineArticles"

function AllArticles(){
    const [searchParams,setSearchParams]=useSearchParams()
    return (
       <>
        <h2> AllArticles</h2>
        <ArticlesByTopic/>
        <RefineArticles searchParams={searchParams} setSearchParams={setSearchParams}/>
        <ArticlesList query={searchParams.toString()} searchParams={searchParams} setSearchParams={setSearchParams}/>
        </>
        )
}

export default AllArticles