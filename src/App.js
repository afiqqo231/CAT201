import "./styles.css";
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Gallery from "./routes/Gallery.js";
import Entertainment from "./routes/Entertainment.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/gallery" element = {<Gallery/>}/>
        <Route path="/entertainment" element = {<Entertainment/>}/>
      </Routes>

    </div>
  );
}
