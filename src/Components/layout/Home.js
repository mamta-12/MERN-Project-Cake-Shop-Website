import React from "react";
import Layout from "./../layout/Layout";
import {Link} from "react-router-dom" ;
import Banner from  "./../images/bg4.jpg";
import './../style/HomeStyle.css';
const Home = () => {
  return (
    <Layout>
      <div className="home" style= {{ backgroundImage: 'url(' + Banner + ')'}} >
   
        <div className="headerContainer">
         <h1>Cake Shop</h1>
         <p>it's cake o'clock!!!</p>
        
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
        </div>
      </div>
    </Layout>
  )
};
export default Home;