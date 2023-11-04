import React from "react";
import Layout from "./../layout/Layout";
import cakes from "./cakesdata";
import Cake from "./Cake";
//import Buynow from "./Buynow";
import './../style/MenuStyle.css';

const Menu = () => {
  return (
    <Layout>
     
     <div>
      <div className= "row">
          {cakes.map(cake=> {
              return<div className="col-md-12">
                <div>
                 <Cake cake= {cake}/>
             </div>
           
      </div>
      })}
      </div>
      </div>
     
    </Layout>
  );
};
export default Menu;