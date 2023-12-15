import Header from "./components/Header/Header";
import "./App.css";
import AllArticles from "./components/AllArticles/AllArticles";
import {Navigate, BrowserRouter as Router,Routes,Route} from "react-router-dom";
import IndividualArticle from "./components/IndividualArticle/IndividualArticle";
import { UserProvider } from "./contexts/User";
import ArticlesByTopic from "./components/ArticlesByTopic/ArticlesByTopic";
import CustomErrors from "./components/CustomErrors/CustomErrors";


function App() {
  return (
    <UserProvider>
    <Router>
      <div className="app-wrapper">
        <Header/>
    <Routes>
      <Route path="/" element={< AllArticles />} />
      <Route path='/topics' element={<ArticlesByTopic/>}/>
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
        <Route path='*' element={<CustomErrors message={'Page not found'} status={404}/>}></Route>
    </Routes>
      </div>
      </Router>
      </UserProvider>
  );
}

export default App;
