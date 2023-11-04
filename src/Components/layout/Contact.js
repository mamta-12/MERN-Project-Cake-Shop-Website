
import React from "react"
import Layout from "./../layout/Layout";
import {Box,TableCell,TableContainer,TableHead,TableRow,Typography,Paper,Table, TableBody} from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import cup from  "./../images/cup.jpg";
const Contact = () => {
  return (
    <Layout>
     
    <img src={cup} alt="bg" height={400} width={400} align={"right"}/>
    

    
      <Box sx={{ my:10,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
        <Typography variant="h4">Contact us </Typography>
        <p> Email us with any questions & inquiries or call 9837959506.</p>
       <p> We would be happy to answer your questions and set meeting with you.</p>
       <br/>
      </Box>
      <Box sx={{margin: 3, width: "600px",ml:10, "@media(max-width:600px)":{width:"300px"}}}> 
      <TableContainer component={Paper}>
       <Table aria-label="contact table">
        <TableHead>
          <TableRow>
            <TableCell sx={{bgcolor:"black",color:"white",}}align="center"> Contact Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <SupportAgentIcon sx={{color:'red',pt: 1 }}/>1234567890 (torollfree)
            </TableCell>
          </TableRow>
          <TableRow>
          <TableCell>
              <MailIcon sx={{color:'skyblue',pt: 1 }}/>help@gamil.com

          </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            <CallIcon sx={{color:'green',pt: 1 }}/>9773925632
            </TableCell>
          </TableRow>
        </TableBody>
       </Table>
         
      </TableContainer>
      </Box>
      
    </Layout>
    
  );
};

export default Contact;