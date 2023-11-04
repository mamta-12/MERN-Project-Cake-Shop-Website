
import React,{useState} from "react"; 
import {AppBar, Box,Divider,Drawer,IconButton, Toolbar,Typography} from '@mui/material'
import CakeRoundedIcon from '@mui/icons-material/CakeRounded'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom" ;
import './../style/HeaderStyle.css';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
//handle menu click
const handleDrawerToggle = () =>{
  setMobileOpen(!mobileOpen);
}
  //menu drawer
  const drawer = (
 <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
<Typography 
            color= {'goldenrod'} 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 , my: 2}}>
           < CakeRoundedIcon />
             Cake Wonderland
             </Typography> 
            <Divider/>
             <ul className= "mobile-navigation">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
        
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
        <li>
          <Link to={'/signup'}>Sign up</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/buynow'}>Buy Now </Link>
        </li>

      </ul>
  
     </Box>
    
       );
  return (
    
     <>
        <AppBar component={'nav'} sx= {{bgcolor: "black"}}>
        <Toolbar>
           <IconButton
            color="inherit" 
            aria-label="open drawer" 
            edge="start" 
             sx={{
                mr: 2, 
                display: { sm : "none" } ,
           }}
           onClick={handleDrawerToggle}

           >
           <MenuIcon/> 
           </IconButton>
            <Typography 
            color= {'goldenrod'} 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1}}>
           <CakeRoundedIcon />
             Cake Wonderland
             </Typography>

             <Box sx={{display: {sx:"none" , sm:"block"}}}>
             <ul className= "navigation-menu">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
        
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
        <li>
          <Link to={'/signup'}>Sign up</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/buynow'}>Buy Now </Link>
        </li>
        

      </ul>
    </Box>
          </Toolbar>
        </AppBar>
            <Box component="nav">
             <Drawer variant="temporary" 
              open={mobileOpen} 
             onClose={handleDrawerToggle}
             sx={{
              display:{xs:'block',sm:'none'},
              "& .MuiDrawer-paper":{                  
              boxSizing: "border-box" ,
              width: "240px",
             },
             }}
             >
             {drawer }
             </Drawer>
             <Toolbar/>
        </Box>
     
    </>
  )
}
export default Header;
