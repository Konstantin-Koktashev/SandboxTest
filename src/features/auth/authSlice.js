import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useFirestore } from 'react-redux-firebase';
import { useFirebase } from 'react-redux-firebase'
import { handleLoading, handleError,handleFulfilled } from '../errorLoadingAction';

export const creatNewUser = createAsyncThunk(
    'firbase/signup',
    async (user, { getState, requestId, extra: getFirebase }) => {
        const { email, password, firstName, lastName } = user
        const { currentRequestId, loading } = getState().auth
        if (loading !== 'pending' || requestId !== currentRequestId) {
            return
        }
        const firebase=getFirebase()
        await firebase.createUser(
            { email, password },
            { firstName, lastName,email}
        )
      
        
    }
)
export const signIn = createAsyncThunk(
    'firbase/user/login',
    async (credentials, { getState, requestId, extra: getFirebase }) => {
        const { email, password} = credentials
        const { currentRequestId, loading } = getState().auth
        if (loading !== 'pending' || requestId !== currentRequestId) {
            return
        }
        const firebase=getFirebase()
        await firebase.login(
           {email,password}
        )
      
      
    }
)

export const authSlice = createSlice({
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
        [creatNewUser.fulfilled]:handleFulfilled,
        [signIn.pending]:handleLoading,
        [signIn.rejected]:handleError,
        [signIn.fulfilled]:handleFulfilled,


    }

})
export const { } = authSlice.actions;

export default authSlice.reducer;