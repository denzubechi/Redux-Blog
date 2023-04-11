import React from 'react';
import { Box, Typography, } from '@mui/material';
import {useSelector} from 'react-redux';
import { selectAllPosts } from './postsSlice';

const PostsList = () => {

  const posts = useSelector(selectAllPosts)

  const renderedPosts = posts.map(post=>(
    <Box key={post.id} 
     border="2px solid white"
     padding="8px"
     marginBottom="1rem"
     borderRadius="10px"
     fontWeight="600"
     >
      <Typography fontSize="30px"fontWeight="600" textAlign="center" fontFamily="cursive">
        {post.title}
      </Typography>
      <Box fontSize="30px" fontFamily="cursive">
        {post.content.substring(0,100)}
      </Box>
    </Box>
  ))


  return (
    <Box 
    display="flex"
    flexDirection="column"
    alignItems="center"
    >
      <Typography
       style={{color:"white",fontSize:"35px",fontWeight:800,fontFamily:"cursive"}}>
        POSTS
      </Typography>
      <Box
      display="flex"
      flexDirection="column" 
      alignItems="center"
      >
        {renderedPosts}
      </Box>
    </Box>
  )
}

export default PostsList