import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../constants";

export const getComments = createAsyncThunk('getComments', async () => {
    const res = await fetch(`${baseUrl}/comment?page=1&limit=5` , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "app-id": '6208e27196604c8110c8d38e'
        }
    })

    const data = res.json()

    return data
})

const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        pending: false,
        error: false
    },
    extraReducers: {
        [getComments.pending]: (state) => {
            state.pending = true
            state.error = false
        },
        [getComments.fulfilled]: (state, action) => {
            state.pending = false
            state.comments = action.payload
        },
        [getComments.error]: (state) => {
            state.pending = false
            state.error = true
        }
    }
})

export default commentSlice.reducer