import { useEffect, useState } from "react";
import { getTopics } from "../../api";
import  ArticlesList  from "../ArticlesList/ArticlesList";
import { useSearchParams } from "react-router-dom";
import RefineArticles from "../RefineArticles/RefineArticles";
import { Link } from "react-router-dom";

function ArticlesByTopic() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams()


  function handleRemoveFilter(){
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("topic");
    setSearchParams(newParams);
  }

  function handleSubmit(event){
    event.preventDefault()
    const newParams = new URLSearchParams(searchParams);
    const selectedTopic = event.target.topic.value;
    newParams.set("topic", selectedTopic);
    setSearchParams(newParams);
  }

  useEffect(() => {
    getTopics()
      .then((topics) => {
          setTopics(topics);
          setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  },[]);

  if (isLoading) {
    return <p>Page is loading...</p>;
  }


    return (
             
      <div className="topics-container">
        <h3>Select topic below:</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="topics"></label>
          <select
            id="topics"
            defaultValue=""
            name='topic'
          >
            <option key="selected" value="" disabled hidden>
              Choose here
            </option>
            {topics.map((topic) => {
              return (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
          </select>
          <button className="submit">Submit</button>
        </form>
          <button onClick={handleRemoveFilter}>
            Remove Topic Filter
          </button>
        {searchParams.toString() !== "" ? (
            <div>
                <RefineArticles
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
              <ArticlesList
                query={searchParams.toString()}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
              </div>
               
        ) : (
            <></>
        )}
        <Link to={"/articles"}>
               <button>View all articles</button>
             </Link>
      </div>
      
    );
  }


export default ArticlesByTopic;
