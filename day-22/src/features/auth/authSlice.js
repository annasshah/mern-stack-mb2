import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    auth: false,
    loading: true,
    userData: null
}



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData : (state, actions) => {
            state.auth = actions.payload.userData ? true : false
            state.userData = actions.payload.userData
            state.loading = false
        }
    },
    // extraReducers:{

    // }

})
 
export const { setUserData } = authSlice.actions

export default authSlice.reducer