import { configureStore } from '@reduxjs/toolkit'
import commentReducer from './commentSlice'
import postReducer from './postSlice'
import userReducer from './userSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        posts: postReducer,
        comments: commentReducer
    }
})