import { createSlice } from '@reduxjs/toolkit'

export const operationSlice = createSlice({
  name: 'operation',
  initialState:{
    status:"add",
    index:""
  },
  reducers: {
    changeoperation: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.status=action.payload.status;
      state.index=action.payload.index;
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeoperation } = operationSlice.actions;
export const getoperation = (state) => state.operationSlice;
export default operationSlice.reducer