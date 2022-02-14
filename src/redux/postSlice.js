import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../constants";

export const getPosts = createAsyncThunk('getPosts', async () => {
    const res = await fetch(`${baseUrl}/post?page=1&limit=5` , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "app-id": '6208e27196604c8110c8d38e'
        }
    })

    const data = await res.json()

    return data
})

export const getPost = createAsyncThunk('getPost', async (id) => {
    const res = await fetch(`${baseUrl}/post/${id}` , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "app-id": '6208e27196604c8110c8d38e'
        }
    })

    const data = await res.json()

    return data
})

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {
            posts: [],
            pending: false,
            error: false
        },
        post: {
            post: null,
            pending: false,
            error: false
        }
        
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.posts.pending = true
            state.posts.error = false
        },
        [getPosts.fulfilled]: (state, action) => {
            state.posts.pending = false
            state.posts.posts = action.payload
        },
        [getPosts.error]: (state) => {
            state.posts.pending = false
            state.posts.error = true
        },
        [getPost.pending]: (state) => {
            state.post.pending = true
            state.post.error = false
        },
        [getPost.fulfilled]: (state, action) => {
            state.post.pending = false
            state.post.post = action.payload
        },
        [getPost.error]: (state) => {
            state.post.pending = false
            state.post.error = true
        }
    }
})

export default postSlice.reducer