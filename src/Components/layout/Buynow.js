import { Button } from "antd";
import React from "react"
import Layout from "./../layout/Layout";
import './../style/BuynowStyle.css';
import{Box} from "@mui/material";
import Banner from  "./../images/img2.jpg";
const Buynow = () => {
  return (
    <Layout>
      <div className="background"style= {{ backgroundImage: 'url(' + Banner + ')'}}>
      <Box sx={{ width: "500px",ml:10, "@media(max-width:700px)":{width:"400px"}}}> 

      <div className="container">
        <div className="btn" >
       <a href="http://media.istockphoto.com/photos/thank-you-sign-blue-paper-tags-picture-id610675564?k=6&m=610675564&s=612x612&w=0&h=2GJgCPaiHH7yN5NJouVPG3YvoKqrnLbp_EQMaXBq2Xc=">
        <Button>UPI</Button></a>
        </div>
        <div className="btn">
        <a href="http://media.istockphoto.com/photos/thank-you-sign-blue-paper-tags-picture-id610675564?k=6&m=610675564&s=612x612&w=0&h=2GJgCPaiHH7yN5NJouVPG3YvoKqrnLbp_EQMaXBq2Xc=">
        <Button>Cash</Button></a>
        </div>
        <div className="btn">
        <a href="http://media.istockphoto.com/photos/thank-you-sign-blue-paper-tags-picture-id610675564?k=6&m=610675564&s=612x612&w=0&h=2GJgCPaiHH7yN5NJouVPG3YvoKqrnLbp_EQMaXBq2Xc=">
        <Button>Credit/Debit Card</Button></a>
        </div>
        
      </div>
     
      </Box>
      </div>
    </Layout>
    
  );
};
export default Buynow;
