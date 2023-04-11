import { useState } from "react";
import React from 'react'
import { Box,Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddFormPost = () => {
    const dispatch = useDispatch()
    const [title,setTitle]= useState('')
    const [content, setContent]=useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = ()=>{
        if(title && content){
            dispatch(
                postAdded(title,content)
            )
            setTitle('')
            setContent('')
        }
    }

  return (
    <Box>
        <Typography
        alignItems="center"
        fontSize="35px"
        fontWeight="800"
        >
            Add New Post
        </Typography>
        <form>
            <label htmlFor="postTitle">
                Post Title
            </label>
            <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            />
            <label htmlFor="postContent">
                Post Content
            </label>
            <input 
            type="text"
            id="postTitle"
            name="postTitle"
            value={content}
            onChange={onContentChanged}/>
            <button 
            type="button"
            onClick={onSavePostClicked}
            >Save Post</button>
        </form>
    </Box>
  )
}

export default AddFormPost