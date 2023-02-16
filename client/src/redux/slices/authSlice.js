import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        name: '',
        status: 'not-authenticated',
        uid: '',
        email: '',
        img:'',
        google: false,
        
    },
    reducers: {
        checkingCredentials: (state) => {
            state.status = 'checking'
         },
         onLogin: (state, {payload}) => {
            state.name = payload.user.name
            // eslint-disable-next-line no-unused-expressions
            state.status = 'authenticated',
            state.uid = payload.user.uid,
            state.email = payload.email,
            state.img = payload.img,
            state.google = false
         },
         onSignUp: (state, {payload}) => {
            // eslint-disable-next-line no-unused-expressions
            state.name = payload.name,
            state.status = 'authenticated',
            state.uid = payload.uid,
            state.email = payload.email,
            state.img = payload.img,
            state.google = false
         },
         onGoogleSignIn:(state, {payload}) => {
            state.name = payload.name
            // eslint-disable-next-line no-unused-expressions
            state.status = 'authenticated',
            state.uid = payload.uid,
            state.email = payload.email
            state.img = payload.img
            state.google = true
         },
         onLogout:(state)=> {
            state.status = 'not-authenticated'
         }
        

    }

})

export const {onLogin, onSignUp, onGoogleSignIn, onLogout, onVerification, checkingCredentials} = authSlice.actions
