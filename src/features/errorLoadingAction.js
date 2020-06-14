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
  export const handleFulfilled= (state,action)=>{
    const { requestId } = action.meta
    if (state.loading === 'pending' && state.currentRequestId === requestId) {
      state.loading = 'idle'
      state.currentRequestId = undefined
    }
  }