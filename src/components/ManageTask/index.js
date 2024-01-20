import React, { useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { getToDoList,removeToDo } from "../../Redux/Slices/Todos";
import { changeoperation } from "../../Redux/Slices/Operation";

const ManageTask=()=>{
    const todos=useSelector(getToDoList);
    const dispatch=useDispatch();
    console.log("managetask",todos);
    const handleEdit=(index)=>{
const noperation={status:"update",index:index}
dispatch(changeoperation(noperation));
    }
    
return(
    <>
    <h1>Manage Task</h1>
    <ul>
        {todos.map((item,index)=>{
return (<li key={index}>{item}<button onClick={()=>dispatch(removeToDo(index))}>X</button><button onClick={()=>handleEdit(index)}>Edit</button></li>)
        })}
        
    
</ul>
</>
)
}
export default ManageTask;