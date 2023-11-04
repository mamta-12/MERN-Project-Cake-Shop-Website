import React from 'react'
import Layout from "./../layout/Layout";
import {Box, Typography} from "@mui/material";
import Banner from  "./../images/banner1.jpg";
const About = () => {
  return (
    <Layout>
    <div className="home" style= {{ backgroundImage: 'url(' + Banner + ')'}} >
   
      <Box sx={{
        my: 5,
        textAlign: 'left',
   
        "& h4": {
          fontWeight: "bold",
          my:2,
          fontSize: '2rem',
        },
         "& p": {
          textAlign : "justify"
         },
         "@media (max-width:600px)": {
          mt: 0,
          "& h4": {
            fontSize:"1.5rem"
          }
         }

         


      }}>
         
         <Typography variant="h4">Welcome To Our Cake Shop!!!</Typography>
         <p>
         We at The Cake Shop specialize in Desserts & Cakes. we believe in "Quality in our Edge",</p> 
         <p>from selecting the ingredients around India to the final exqusite creation that "Bring you smiles for Sure"
         </p>

         
         <p>
         Our cakes & Desserts receive a lot of compliments and are complimented by wide range of exclusive desserts.
         </p>
         <p>
         Our theme based Creative Cakes, Cake pop , Cup Cakes and Desserts for Parities, make you Party Unique and Inevitable.</p>
         <p> We spend more time in understanding customers expectation,
         </p>
         <p>
         So we Perfectly Personalize to the Needs.
         </p>
         <br/>
        
      </Box>
      </div>
    </Layout>
    
  );
};
export default About;