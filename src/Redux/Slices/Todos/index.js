import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todos',
  initialState:[],
  reducers: {
    addToDo: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.push(action.payload);
    },
    removeToDo: (state,action) => {
      return state.filter((todo,id)=>id!==action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToDo, removeToDo } = todoSlice.actions;
export const getToDoList = (state) => state.toDo;
export default todoSlice.reducer