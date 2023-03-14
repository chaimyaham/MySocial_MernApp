import React from 'react'
import { useState } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close
} from "@mui/icons-material";

import { useDispatch, useSelector } from 'react-redux';
import { setMode,setLogout } from 'state';
import { useNavigate } from 'react-router-dom';
import FlexBetween from 'components/FlexBetween';
import { light } from '@mui/material/styles/createPalette';

export const Navbar = () => {
  const [isMobileMenuToggled, setisMobileMenuToggled] = useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((state)=>state.user);
  const isNonMobileScreens= useMediaQuery("(min-width:1000px");
  const theme =useTheme();
  const neutralLight=theme.palette.neutral.medium;
  const dark=theme.palette.neutral.dark;
  const background=theme.palette.background.default;
  const primarydark=theme.palette.primary.main;
  const alt=theme.palette.background.alt;
  const fullName=`${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="0.5rem 6%" backgroundColor={alt} position="fixed" zIndex="100" top="0" >
      <FlexBetween gap="1.75rem">

        <Box  sx={{
          p:"0",
          m:"0",
          color:dark,
          "&:hover":{
            color:neutralLight,
            cursor: "pointer",

          }
        }} >
          <FlexBetween>
     
           <img  src="../logo_Bconnect.png" alt='logo_bconnect'  onClick={()=>navigate("/home")}
           width="25%" style={{objectFit:"contain"}}
       />
      
        {isNonMobileScreens && ( 
        <FlexBetween backgroundColor={primarydark} borderRadius="15px" gap="3rem" margin="0 2.5rem" padding="0 0.9rem">

          <InputBase placeholder='Search... ' />
          <IconButton>
            <Search/>
          </IconButton>
          
         </FlexBetween>)}
         </FlexBetween>
         </Box>

      </FlexBetween>
          {/* desktp nav */}
          {isNonMobileScreens ? (
          <FlexBetween gap="2rem" >
            <IconButton onClick={()=>dispatch(setMode())}>
            {theme.palette.mode==="dark" ? <DarkMode sx={{ fontSize:"25px"}}/>:<LightMode sx={{color:dark, fontSize:"25px" }}/>}
            </IconButton>

            {/* if someone send a message it's gonna be added here */}
            <Message sx={{ color:dark, fontSize:"25px" }}/>


            {/* if someone like a post or add me as a friend i want it to show up here */}
            <Notifications sx={{ color:dark, fontSize:"25px" }}/>
            
            <Help sx={{ color:dark, fontSize:"25px" }}/>
            <FormControl variant="standard" value={fullName} >
              <Select value={fullName} sx={{
                
                width :"150px",
                borderRadius:"0.25rem",
                padding:"1rem",
                "& .MuiSvgIcon-root":{
                  pr:"0.25rem",
                  width:"3rem",

                },
                "& .MuiSelect-select:focus":{
                 
                },
                "&:hover":{
                  // backgroundColor: neutralLight,
                }
              }}
              input={<InputBase/>}
              >
                <MenuItem  onClick={()=>navigate(`/profile/${user._id}`)} value={fullName}>
                <Typography sx={{
                  fontSize: "14px",
                }}>
                  {fullName}
                </Typography>
                </MenuItem>
                <MenuItem onClick={()=> dispatch(setLogout())}>
               
                  Log out
              
                </MenuItem>

              </Select>
            </FormControl>

          </FlexBetween>):(
          <IconButton
           onClick={()=>setisMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Menu/>

          </IconButton>)}
          {/* Mobile navbar */}
          {!isNonMobileScreens && isMobileMenuToggled && (
            <Box position="fixed"
            zIndex="100"
            right="0"
            bottom="0"
            height="100%"
            maxWidth="500px"
            minWidth="300px"
            backgroundColor={background}>
              <Box display="flex" justifyContent="flex-end" p="1rem">
                <IconButton
                 onClick={()=>setisMobileMenuToggled(!isMobileMenuToggled)}>
                  <Close/>
                  

                </IconButton>
              </Box>
              {/* Menu items */}

              <FlexBetween display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="2rem" >
            <IconButton onClick={()=>dispatch(setMode())}>
            {theme.palette.mode==="dark" ? <DarkMode sx={{ fontSize:"25px"}}/>:<LightMode sx={{color:dark, fontSize:"25px" }}/>}
            </IconButton>
            <Message sx={{ color:dark, fontSize:"25px" }}/>
            <Notifications sx={{ color:dark, fontSize:"25px" }}/>
            <Help sx={{ color:dark, fontSize:"25px" }}/>
            <FormControl variant="standard" value={fullName} >
              <Select value={fullName} sx={{
                
                width :"150px",
                borderRadius:"0.25rem",
                padding:"1rem",
                "& .MuiSvgIcon-root":{
                  pr:"0.25rem",
                  width:"3rem",

                },
                "& .MuiSelect-select:focus":{
                 
                },
                "&:hover":{
                  // backgroundColor: neutralLight,
                }
              }}
              input={<InputBase/>}
              >
                <MenuItem value={fullName}  onClick={()=>navigate(`/profile/${user._id}`)}>
                <Typography sx={{
                  fontSize: "14px",
                }}>
                  {fullName}
                </Typography>
                </MenuItem>
                <MenuItem onClick={()=> dispatch(setLogout())}>
               
                  Log out
              
                </MenuItem>

              </Select>
            </FormControl>

          </FlexBetween>
              



            </Box>
          )}
    </FlexBetween>
  )
}
