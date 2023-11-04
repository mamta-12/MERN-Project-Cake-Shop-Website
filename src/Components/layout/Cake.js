import { height } from '@mui/system';
import React,{useState} from 'react'
import './../style/CakeStyle.css';
//import Buynow from "./Buynow";
import { Link } from "react-router-dom";
export default function Cake({cake}) {
  const [quantity ,setquantity] = useState(1)
  const [varient ,setvarient] = useState('1kg')
  return (  
       <div className="flex-row">
        <h3>{cake.name}</h3>
        <img src={cake.image} className="img-fliud"  />
        <div className = "flex-container">
        <div className="container">
        <div>
          <p>Varients
           <select value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
             {cake.varients.map(varient=>{
              return <option value={varient}>{varient}</option>
            })}
            </select>
            </p>
        </div>
        <div>
          <p>
          <div className='w-100'>
         <h3>Price: {cake.prices[0][varient]*quantity}</h3>
      </div>
          
          </p>
        </div>  
    </div>
    <div className="flex-container">
    Quantity
          <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
          {[...Array(5).keys()].map((x,i)=>{
            return <option value={i+1}>{i+1}</option>
          })}
          </select>
      
      <div className='w-100'>
      <Link to="/buynow">
      <button className='btn'>Buy Now</button>
        </Link>
      </div>
     </div>
    </div>
    </div>
  )
}

