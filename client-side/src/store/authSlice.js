import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    status: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.status = true
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null,
                state.status = false
        },
        subscription: (state, action) => {
            if (state.user.data.loggedInUser.subscribedUsers.includes(action.payload)) {
                state.user.data.loggedInUser.subscribedUsers.splice(
                    state.user.data.loggedInUser.subscribedUsers.findIndex(
                        (channelId) => channelId === action.payload
                    ),
                    1
                );
            } else {
                state.user.data.loggedInUser.subscribedUsers.push(action.payload)
            }
        },
        savedVideos : (state,action) => {
            if (state.user.data.loggedInUser.savedVideos.includes(action.payload)) {
                state.user.data.loggedInUser.savedVideos.splice(
                    state.user.data.loggedInUser.savedVideos.findIndex(
                        (VideoId) => VideoId === action.payload
                    ),
                    1
                );
            } else {
                state.user.data.loggedInUser.savedVideos.push(action.payload)
            }
        },
    }
})

export const { loginSuccess, logout ,subscription,savedVideos} = authSlice.actions;

export default authSlice.reducer;