import React from "react"
import Layout from "./../layout/Layout";
import page from  "./../images/page.jpg";
import {Box} from "@mui/material";
const Pagenotfound = () => {
  return (
    <Layout>
    <Box>
     <div className="background"style= {{ backgroundImage: 'url(' + page + ')'}}>

     </div>
     </Box>
    </Layout>
    
  );
};
export default Pagenotfound;