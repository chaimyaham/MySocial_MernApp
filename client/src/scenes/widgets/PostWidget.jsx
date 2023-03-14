import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme, IconButton } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPost } from "state";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
 
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);

  const likeCount = Object.keys(likes).length;

  // grap colors
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.neutral.main;
 

  const patchLike = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${postId}/like`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      }
    );
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={`../assets/${userPicturePath}`}
        
      />
      <Typography
        color={palette.neutral.medium}
        sx={{
          mt: "1rem",
          "&:hover": {
            cursor: "pointer",
            color: primary,
          },
        }}
      >
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`../assets/${picturePath}`}
          alt="post"
        />
      )}

      <FlexBetween mt="0.25em">
        <FlexBetween gap="1rem">

          {/* like Section */}
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: palette.primary.main }} />
              ) : (
                <FavoriteBorderOutlined sx={{ color: palette.primary.main }} />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          {/* Comments Section */}

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined/>
            </IconButton>
            <Typography>
              {comments.length}
            </Typography>
          </FlexBetween>


        </FlexBetween>
                <IconButton>
                  <ShareOutlined/>
                </IconButton>

      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment ,index) =>(
            <Box key={`${name}-${index}`}>
              <Divider/>
              <Typography sx={{color:palette.neutral.medium , margin:"0.5rem 0", paddingLeft:"1rem"}}>
                {comment}
                
              </Typography>


            </Box>

          ))}
          <Divider/>

        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
