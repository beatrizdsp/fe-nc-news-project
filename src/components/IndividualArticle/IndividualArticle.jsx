import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById, patchArticleVotes } from "../../api";
import { Link } from "react-router-dom";
import CommentList from "../CommentList/CommentList";
import PostComment from "../PostComment/PostComment";

function IndividualArticle() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [currArticle, setCurrArticle] = useState({});
  const [counter,setVotes] = useState({votes:0})
  const [voteError, setVoteError] = useState(false);
  const [articleComments, setArticleComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticlesById(article_id).then((article) => {
      setIsLoading(false);
      setCurrArticle(article);
    });
  }, [article_id]);

  const { title, topic, author, body, article_img_url, comment_count, votes } =
    currArticle;

function handleVoteIncrease(){
    setVoteError(false)
setVotes((currentVotes)=>{
    counter.votes = currArticle.votes+1;
    return {...currentVotes}
})

 patchArticleVotes(article_id,{inc_votes:1})
 .then(()=>{
    setCurrArticle((currArticle)=>({
        ...currArticle, votes: counter.votes,
     }))
    return;
 })
 .catch(()=>{
    setVoteError(true)
 })
}

function handleVoteDecrease(){
    setVoteError(false)
    setVotes((currentVotes)=>{
        counter.votes = currArticle.votes-1;
        return {...currentVotes}
    })

     patchArticleVotes(article_id,{inc_votes:-1})
     .then(()=>{
        setCurrArticle((currArticle)=>({
            ...currArticle, votes: counter.votes,
         }))
        return;
     })
     .catch(()=>{
        setVoteError(true)
     })
}

  if (isLoading) {
    return <p>Page is loading...</p>;
  }

  return (
    <div className="individual-article">
      <article>
        <header>
          <h3>{topic}</h3>
          <h4>Written by: {author}</h4>
        </header>
        <h2>{title}</h2>
        <img src={article_img_url} alt={`Image of ${title}`} />
        <section>
          <p>{body}</p>
        </section>
        <section className="vote-article">
            <p>Votes: {currArticle.votes}</p>

                <button onClick={handleVoteIncrease}>👍</button>
                <button onClick={handleVoteDecrease}>👎</button>
           {voteError && <p style={{ color: 'red' }}>Error adding vote. Please try again.</p>}
        </section>
        <div className="post-comment">
            <PostComment article_id = {article_id} articleComments={articleComments} setArticleComments = {setArticleComments} setCurrArticle={setCurrArticle}/>
        </div>
        <div className="comment-list">
          <p>Total Comments: {comment_count}</p>
          <CommentList article_id={article_id} articleComments={articleComments} setArticleComments={setArticleComments} setCurrArticle={setCurrArticle}/>
        </div>
      </article>
      <Link to={"/articles"}>
        <button>Back to articles</button>
      </Link>
    </div>
  );
}

export default IndividualArticle;
