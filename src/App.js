import React from "react";
import "./assets/custom.css"
import Home from "./Home";
import More from "./More";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
