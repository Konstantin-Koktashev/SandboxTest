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


const booksSelectors = boardsAdapter.getSelectors(state => state.currBoard)

export default boardsSlice.reducer;
