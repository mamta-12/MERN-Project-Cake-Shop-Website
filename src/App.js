//import React from "react" ;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/layout/Home';
import Menu from "./Components/layout/Menu";
import Login from "./Components/layout/Login";
import Signup from "./Components/layout/Signup";
import Buynow from "./Components/layout/Buynow";
import  About from "./Components/layout/About";
import Contact from "./Components/layout/Contact";
import Pagenotfound from "./Components/layout/Pagenotfound";
import PrivateRoutes from "./utils/PrivateRoutes";


function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Home /> } />
          <Route path="/menu" element={<Menu /> } />
          <Route path="/login" element={<Login /> } />
          <Route path="/signup" element={<Signup /> } />
          <Route path="/about" element={<About /> } />
          <Route path="/contact" element={<Contact /> } />
          <Route path="/buynow" element={<Buynow /> } />
          <Route path="*" element={<Pagenotfound /> } />
        </Routes>
      </BrowserRouter>
      <menu/>
    </div>
  );
};

export default App;
