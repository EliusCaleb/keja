import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hotel from "./Hotel";
import List from "./List"


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />  
      </Routes>
    </div>
  );
}
export default App;