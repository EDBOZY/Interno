import Article from "./Article/Article";
import Copy from "./Copywrite/Copy";
import Estimate from "./Estimate/Estimate";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Join from "./Join/Join";
import Navbar from "./Navbar/Navbar";
import People from "./People/People";
import Plan from "./Plan/Plan";
import Project from "./Projects/Project";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Plan/>
      <Estimate/>
      <People/>
      <Project/>
      <Experience/>
      <Article/>
      <Join/>
      <Footer/>
      <Copy/>
    </div>
  );
}

export default App;
