import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./Todos";
export const rootReducer=combineReducers({
    toDo:todoSlice,
})