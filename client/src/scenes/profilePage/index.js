import React from 'react'
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Navbar } from 'scenes/navbar';
import EditOutlined from '@mui/icons-material/EditOutlined';
import FriendListWidget from 'scenes/widgets/FriendListWidget'
import MyPostWidget from 'scenes/widgets/MyPostWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import UserWidget from 'scenes/widgets/UserWidget';
import UserImage from 'components/UserImage'
import WidgetWrapper from 'components/WidgetWrapper'
import FlexBetween from 'components/FlexBetween'



export const ProfilePage = () => {
  const [user,setUser]=useState(null);
  
  const{userId}=useParams();  
  const token = useSelector(state=>state.token);
  const Muser = useSelector(state=>state.user);
 

  
  const { palette } = useTheme();
 
  const isNonMobileScreen=useMediaQuery("(min-width: 1000px)");

  const getUser= async ()=>{
    const response = await fetch(`http://localhost:3001/users/${userId}`,{
      method: 'GET',
      headers:{Authorization:`Bearer ${token}`}

    });
    const data= await response.json();
    setUser(data);

  }
  useEffect(()=>{
    getUser();

  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  if(!user)return null;


  return (
    <Box>
       <Navbar/>

     <WidgetWrapper>
      <FlexBetween>

            <Box p="20px"  sx={{ textAlign:"center","&:hover ,EditOutlined":{
        cursor:"pointer"
      }}}>
      <UserImage image={`../assets/${user.picturePath}`} size='250px'/>
      {userId===Muser._id?  <IconButton sx={{position:"absolute", width:"50px",height:"50px", left:"150px" ,bottom:"270px",color:palette.primary.main, "&:hover":{
          backgroundColor:palette.neutral.medium
        }}}>
        <EditOutlined  />
        </IconButton>:""}

      </Box>
      </FlexBetween>


       
     </WidgetWrapper>
    <Box  width="100%" padding="2rem 6%" display={isNonMobileScreen?"flex":"block"} gap="2rem" justifyContent="center">
      <Box  flexBasis={isNonMobileScreen? "35%" :undefined}>

        <UserWidget userId={userId} picturePath={`../assets/${user.picturePath}`}/>
        <Box m="2rem 0">
          <FriendListWidget userId={userId}/>
        </Box>

      </Box>
      <Box  flexBasis={isNonMobileScreen? "50%" :undefined} mt={isNonMobileScreen?undefined:"2rem"}>

        <MyPostWidget picturePath={`../assets/${user.picturePath}`}/>
        <Box m="2rem 0">
        <PostsWidget userId={userId} isProfile={true}/>
        </Box>
      </Box>

 
    </Box>
    </Box>
  )
}
