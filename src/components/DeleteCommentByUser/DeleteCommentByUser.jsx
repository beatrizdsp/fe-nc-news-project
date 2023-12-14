import { useState, useContext } from "react";
import { deleteComment } from "../../api";
import { UserContext } from "../../contexts/User";

function DeleteCommentByUser({comment_id,author,articleComments,setArticleComments,setCurrArticle}) {
    const { username } = useContext(UserContext);
    const [buttonLock,setButtonLock]=useState(false)
    const [unsuccessfulDelete,setUnsuccessfulDelete]=useState(true)
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError]=useState(false)

  const handleDelete = (comment_id) => {
    setIsLoading(true);
    setButtonLock(true);
    deleteComment(comment_id)
      .then(() => {
        setIsLoading(false);
        setButtonLock(false);
        setUnsuccessfulDelete(false);
        setArticleComments((oldComments)=>{
            const newComments = oldComments.filter((comment)=>{
                return comment.comment_id !=comment_id
            })
            return newComments
        });
        setCurrArticle((currArticle) => {
          return {
            ...currArticle,
            comment_count: +currArticle.comment_count - 1,
          };
        });
      })
      .catch((err) => {
        setIsLoading(false);
        setButtonLock(false);
        setUnsuccessfulDelete(true);
        console.error(err,"Error deleteing comment");
        setError(true)
      });
  };

  if (isLoading) {
    return <p>Page is loading...</p>;
  }
if(username.username === author){
    return (
      <>
        {!unsuccessfulDelete && (
          <p id="success-msg" style={{ color: "green" }}>
            Comment deleted successfully
          </p>
        )}
        {error && (
          <p id="error-msg" style={{ color: "red" }}>
            Error: unable to delete comment. Please try again later.
          </p>
        )}
        <button
          onClick={() => {
            handleDelete(comment_id);
          }}
          disabled={buttonLock}
        >
          Delete 🗑️
        </button>
      </>
    );

} else {
    return <></>
}
}

export default DeleteCommentByUser;
