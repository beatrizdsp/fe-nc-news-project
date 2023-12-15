import { useState, useContext } from "react";
import { postComment } from "../../api";
import { UserContext } from "../../contexts/User";

function PostComment({ article_id ,articleComments,setArticleComments,setCurrArticle}) {
  const { username } = useContext(UserContext);
  const [newComment, setNewComment] = useState();
  const [successfulComment, setSuccessfulComment] = useState(null);
  const [buttonLock, setButtonLock] = useState(false);
  const [isLoading,setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonLock(true);
    setIsLoading(true)
    if (!newComment) {
        setSuccessfulComment("empty");
        setButtonLock(false);
        setIsLoading(false)
    } else {
        setIsLoading(true)
      postComment(article_id,username.username, newComment)
        .then(({ comment }) => {
            
                setArticleComments([{ ...comment }, ...articleComments]);
                setCurrArticle((currArticle) => {
                  return {
                    ...currArticle,
                    comment_count: +currArticle.comment_count + 1,
                }})
        setSuccessfulComment("posted");
          setNewComment("");
          setButtonLock(false);
          setIsLoading(false)
          return;
        })
        .catch((err) => {
            setSuccessfulComment("error");
          setButtonLock(false);
          setIsLoading(false)
        });
    }
  };
  
  if(isLoading){
    return <p>Page is loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {successfulComment === "posted" ? (
  <p>Your comment has been added</p>
) : successfulComment === "error" ? (
  <p>Error: your comment could not be added</p>
) : successfulComment === "empty" ? (
  <p>Cannot submit an empty comment</p>
) : null}
      <label htmlFor="comment-body"></label>
      <textarea
        name="body"
        id="comment-body"
        cols="80"
        rows="10"
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
        value={newComment}
        placeholder="..."
      ></textarea>
      <button className="post-button" disabled={buttonLock}>
        Add new comment
      </button>
    </form>
  );
}

export default PostComment;