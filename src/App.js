import "./styles.css";
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home.js";
import Food from "./routes/Food.js";
import Places from "./routes/Places.js";
import Entertainment from "./routes/Entertainment.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/places" element = {<Places/>}/>
        <Route path="/food" element = {<Food/>}/>
        <Route path="/entertainment" element = {<Entertainment/>}/>
      </Routes>

    </div>
  );
}
