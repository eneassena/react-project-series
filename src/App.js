import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/index';
import About from './pages/about'

 
function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
       </Routes>

      <hr />
      
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

    </div>
  )
}

 

  

export default App;
