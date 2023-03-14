import React from 'react'
import {Box,Typography,useTheme,useMediaQuery} from "@mui/material" ;
import { Form } from './Form';



export const LoginPage = () => {
  const theme=useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
  <Box>
    <Box width="100%" backgroundColor={theme.palette.background.alt} p="0.5rem 6%" textAlign="center">
   
        <img width="30%" height="30%" src="logo_Bconnect.png" alt='logo_bconnect' />
      
    </Box>
    <Box width={isNonMobileScreens?"50%":"93%"} p="2rem" m="2rem auto" borderRadius="1rem"
    backgroundColor={theme.palette.background.alt}>
      <Typography fontWeight="500" variant="h5" sx={{mb:"1rem"}} color={theme.palette.primary.dark} >

      

      </Typography>
     <Form/>

    </Box>
  </Box>
  )
}
