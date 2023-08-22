import { configureStore } from '@reduxjs/toolkit'
import todoSlice  from '../Slices/Todos';

export const store= configureStore({
  reducer: {
    toDo:todoSlice,
}
  
})
