import { React } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/custom.css";
import Home from "./Home";
import More from "./More";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
