import React from "react";
import "./assets/custom.css"
import Section1 from "./Section1";
import More from "./More";
import { Routes, Route } from "react-router-dom";
 /*
  <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>*/
function App() {
  return (
    <div>
      <Section1 />
      <Routes>
        <Route exact path="More" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
