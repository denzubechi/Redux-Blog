import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState =[
    {
        id:'1',
        title:"learning redux toolkit",
        content:"I've heard good things "
    },
    {
        id:'2',
        title:"learning useEffect",
        content:"I have built standard projects"
    },
    {
        id:'3',
        title:"learning mern dev",
        content:"Built a netflix clone"
    }
]
const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            //callback
            prepare(title,content){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded} = postsSlice.actions
export default postsSlice.reducer;