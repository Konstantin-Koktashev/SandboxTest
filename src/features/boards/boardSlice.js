import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import { useFirestore } from 'react-redux-firebase';
import { handleLoading, handleError } from '../errorLoadingAction';



///Async Thunks


export const insertOne = createAsyncThunk( 
  'firestore/addTestTodo',
  async (newTodo, {getState, requestId, extra : getFirebase}) => {
    const fireStore = useFirestore()
    console.log(fireStore)
      const { currentRequestId, loading } = getState().boards
      if (loading !== 'pending' || requestId !== currentRequestId) {
        return
      }
      fireStore.collection('todos').add(newTodo)
      console.log(fireStore.collection('todos'))
    }
  )

  

// export const fetchAllUserBoards = createAsyncThunk(
//     'user/fetchAllUserBoards',
//     async (userId, { getState, requestId }) => {
//       const { currentRequestId, loading } = getState().users
//       if (loading !== 'pending' || requestId !== currentRequestId) {
//         return
//       }
//       const response = await userAPI.fetchById(userId)
//       return response.data
//     }
//   )
  

///Adapter
const boardsAdapter = createEntityAdapter({
    selectId: book => book.id,
  })
  
export const boardsSlice = createSlice({
  name: 'boards',
  initialState: boardsAdapter.getInitialState({
    loading: 'idle',
    currentRequestId: undefined,
    error: null
  }),
  reducers: {
    boardAdded:boardsAdapter.addOne,
    boardRemoved:boardsAdapter.removeOne,
    boardUpdated:boardsAdapter.updateOne,
  },
  extraReducers:{
      [insertOne.pending]:handleLoading,
      [insertOne.rejected]:handleError
  }
});

export const { boardAdded } = boardsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
const booksSelectors = boardsAdapter.getSelectors(state => state.currBoard)

export default boardsSlice.reducer;
