import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useFirestore } from 'react-redux-firebase';
import { useFirebase } from 'react-redux-firebase'
// import { handleLoading, handleError } from '../errorLoadingAction';
export const handleLoading=(state, action) => {
    
    if (state.loading === 'idle') {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
  }
  export const handleError=(state, action) => {
    const { requestId } = action.meta
    if (state.loading === 'pending' && state.currentRequestId === requestId) {
      state.loading = 'idle'
      state.error = action.error
      state.currentRequestId = undefined
    }
  }


export const creatNewUser = createAsyncThunk(
    'firbase/signup',
    async (user, { getState, requestId, extra: getFirebase }) => {
        
        // const firebase = useFirebase()
        // console.log('im hereeeeeeee',firebase)
        const { email, password, firstName, lastName } = user
        const { currentRequestId, loading } = getState().user
        if (loading !== 'pending' || requestId !== currentRequestId) {
            return
        }
        const newUser= getFirebase().createUser(
            { email, password },
            { firstName, lastName,email}
        )
      
        return newUser
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
        }

    }

})
export const { } = userSlice.actions;

export default userSlice.reducer;