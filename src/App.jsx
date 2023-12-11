import Header from "./components/header/Header";
import "./App.css";
import AllArticles from "./components/AllArticles/AllArticles";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header/>
    <Routes>
      <Route path="/" element={<AllArticles />} />
        <Route path="/articles" element={<AllArticles />} />
    </Routes>
      </div>
      </Router>
  );
}

export default App;
