import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl } from '../constants'


export const getUsers = createAsyncThunk('getUsers', async() => {
  const res = await fetch(`${baseUrl}/user?page=1&limit=5`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "app-id": '6208e27196604c8110c8d38e'
    }
  })

  const data = await res.json()
  
  return data
})

export const getUser = createAsyncThunk('getUser', async(id) => {
  const res = await fetch(`${baseUrl}/user/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "app-id": '6208e27196604c8110c8d38e'
    },
  })

  const data = await res.json()
  
  return data
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: {
      list: [],
      pending: false,
      error: false
    },
    user: {
      list: null,
      pending: false,
      error: false
    }
  },
  reducers: {
    // getUsers: state => {
    //   state.list += 1
    // },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.users.pending = true
      state.users.error = false
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users.pending = false
      state.users.list = action.payload
    },
    [getUsers.rejected]: (state) => {
      state.users.pending = false
      state.users.error = true
    },
    [getUser.pending]: (state) => {
      state.user.pending = true
      state.user.error = false
    },
    [getUser.fulfilled]: (state, action) => {
      state.user.pending = false
      state.user.list = action.payload
    },
    [getUser.rejected]: (state) => {
      state.user.pending = false
      state.user.error = true
    }
  }
})

export const { } = userSlice.actions
export default userSlice.reducer