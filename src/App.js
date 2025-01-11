import "./styles.css";
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home.js";
import Food from "./routes/Food.js";
import Places from "./routes/Places.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/CAT201" element = {<Home/>}/>
        <Route path="/CAT201/places" element = {<Places/>}/>
        <Route path="/CAT201/food" element = {<Food/>}/>
      </Routes>

    </div>
  );
}
