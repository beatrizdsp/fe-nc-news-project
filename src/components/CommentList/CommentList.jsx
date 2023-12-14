import { useEffect,useState } from "react";
import { getCommentsById } from "../../api";
import Collapsible from "../Collapsible/Collapsible";
import FancyBox from "../FancyBox/FancyBox";
import DeleteCommentByUser from "../DeleteCommentByUser/DeleteCommentByUser";

function CommentList({ article_id, articleComments,setArticleComments,setCurrArticle}) {
    const [isLoading,setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getCommentsById(article_id).then((comments) => {
          setArticleComments(comments);
          setIsLoading(false)
        });
      }, [article_id]);
        
        

      if(isLoading){
        return <p>Page is loading...</p>;
      }


  return (
    <section>
      <Collapsible descriptor="comments">
        <ul>
          {articleComments.map(
            ({ author, body, created_at, votes, comment_id }) => {
              return (
                <FancyBox key={`fancy-box-${comment_id}`}>
                  <li key={comment_id}>
                    <p>Author:{author}</p>
                    <time dateTime={created_at.slice(0,10)}>
                      {created_at.slice(0,10)}
                    </time>
                    <p>{body}</p>
                    <p>{votes}</p>
                  </li>
                  <DeleteCommentByUser
                  comment_id = {comment_id} author={author} articleComments={articleComments} setArticleComments={setArticleComments} setCurrArticle={setCurrArticle}
                  />
                </FancyBox>
              );
            }
          )}
        </ul>
      </Collapsible>
    </section>
  );
}

export default CommentList;
