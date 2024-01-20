import { configureStore } from '@reduxjs/toolkit'
import {todoSlice}  from '../Slices/Todos';
import { operationSlice } from '../Slices/Operation';

export const store= configureStore({
  reducer: {
    toDo:todoSlice.reducer,
    operationSlice:operationSlice.reducer
}
  
})
