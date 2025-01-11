import "./styles.css";
import { Route, Routes, HashRouter  } from "react-router-dom"
import Home from "./routes/Home.js";
import Food from "./routes/Food.js";
import Places from "./routes/Places.js";
import Footer from "./components/Footer.js"

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/places" element = {<Places/>}/>
        <Route path="/food" element = {<Food/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
