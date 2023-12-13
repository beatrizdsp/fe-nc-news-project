import { useState, useEffect } from "react";
import { getCommentsById } from "../../api";
import Collapsible from "../Collapsible/Collapsible";
import FancyBox from "../FancyBox/FancyBox";

function CommentList({ articleComments }) {
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
                    <time dateTime={created_at.slice(0, 10)}>
                      {created_at.slice(0, 10)}
                    </time>
                    <p>{body}</p>
                    <p>{votes}</p>
                  </li>
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
