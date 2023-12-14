import { useSearchParams } from "react-router-dom"
import ArticlesList from "../ArticlesList/ArticlesList"


function AllArticles(){
    const [searchParams,setSearchParams]=useSearchParams()
    return (
       <>
        <h2> AllArticles</h2>
        <ArticlesList searchParams={searchParams} setSearchParams={setSearchParams}/>
        </>
        )
}

export default AllArticles