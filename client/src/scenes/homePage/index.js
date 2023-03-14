import { useMediaQuery,Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from 'scenes/navbar'
import FriendListWidget from 'scenes/widgets/FriendListWidget'
import MyPostWidget from 'scenes/widgets/MyPostWidget'
import PostsWidget from 'scenes/widgets/PostsWidget'
import UserWidget from 'scenes/widgets/UserWidget'

export const HomePage = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)")
  const {_id,picturePath}=useSelector(state=>state.user)
  return (
    <>
    <Navbar />
    <div style={{marginTop:"15vh"}}>
    <Box  width="100%" padding="2rem 6%" display={isNonMobileScreen?"flex":"block"} gap="0.5rem" justifyContent="space-between">
      <Box  flexBasis={isNonMobileScreen? "30%" :undefined}>

        <UserWidget userId={_id} picturePath={picturePath}/>

      </Box>
      <Box  flexBasis={isNonMobileScreen? "45%" :undefined} mt={isNonMobileScreen?undefined:"2rem"}>

        <MyPostWidget picturePath={picturePath}/>
        <PostsWidget userId={_id}/>

      </Box>

    {isNonMobileScreen && <Box  flexBasis="25%">
      <FriendListWidget userId={_id}/>
      
      </Box>}
    </Box>
    </div>

    </>
  )
}
