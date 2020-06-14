import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useFirestore } from 'react-redux-firebase';
import { useFirebase } from 'react-redux-firebase'
import { handleLoading, handleError } from '../errorLoadingAction';

export const creatNewUser = createAsyncThunk(
    'firbase/signup',
    async (user, { getState, requestId, extra: getFirebase }) => {
        const { email, password, firstName, lastName } = user
        const { currentRequestId, loading } = getState().user
        if (loading !== 'pending' || requestId !== currentRequestId) {
            return
        }
        const firebase=getFirebase()
        
        const newUser= firebase.createUser(
            { email, password },
            { firstName, lastName,email}
        )
      
        return newUser
    }
)
export const signIn = createAsyncThunk(
    'firbase/user/login',
    async (credentials, { getState, requestId, extra: getFirebase }) => {
        const { email, password} = credentials
        const { currentRequestId, loading } = getState().user
        if (loading !== 'pending' || requestId !== currentRequestId) {
            return
        }
        const firebase=getFirebase()
        await firebase.login(
           {email,password}
        )
      
      
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        currUser: null,
        loading: 'idle',
        currentRequestId: undefined,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [creatNewUser.pending]:handleLoading,
        [creatNewUser.rejected]:handleError,
        [creatNewUser.fulfilled]:(state,action)=>{
            state.currUser=action.payload
        },
        [signIn.pending]:handleLoading,
        [signIn.rejected]:handleError,
        [signIn.fulfilled]:(state,action)=>{
            state.currUser=action.payload
        },


    }

})
export const { } = userSlice.actions;

export default userSlice.reducer;