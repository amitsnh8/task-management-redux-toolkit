import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./Todos";
import { operationSlice } from "./Operation";
export const rootReducer=combineReducers({
    toDo:todoSlice,
    operationReducer:operationSlice,

})