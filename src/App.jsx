import Header from "./components/Header/Header";
import "./App.css";
import AllArticles from "./components/AllArticles/AllArticles";
import {Navigate, BrowserRouter as Router,Routes,Route} from "react-router-dom";
import IndividualArticle from "./components/IndividualArticle/IndividualArticle";
import { UserProvider } from "./contexts/User";


function App() {
  return (
    <UserProvider>
    <Router>
      <div className="app-wrapper">
        <Header/>
    <Routes>
      <Route path="/" element={< Navigate to="/articles" />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
    </Routes>
      </div>
      </Router>
      </UserProvider>
  );
}

export default App;
