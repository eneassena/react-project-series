import React from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  Navigate
} from "react-router-dom";

import Home from './pages/index';
import About from './pages/about';
import LoginPage from './pages/login';

import RequireAuth from "./pages/autenticacao/requireAuth"; 


function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={
            <RequireAuth>
                <Home />
            </RequireAuth>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={
            <RequireAuth>
              <About />            
            </RequireAuth>} 
           />
       </Routes>

      <hr />
      
      <Link to="/">Home</Link> 
      <br />
      <br />
      <Link to="/about">About</Link>

    </div>
  )
}

 

  

export default App;
