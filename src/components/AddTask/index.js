
import React,{useEffect, useState} from "react";
import { Box,TextField,Button } from "@mui/material";
import { useDispatch,useSelector } from 'react-redux';
import { addToDo,editToDo, getToDoList } from "../../Redux/Slices/Todos"; 
import { changeoperation, getoperation } from "../../Redux/Slices/Operation";


const AddTask=()=>{
    const [task,setTask]=useState("");
    const dispatch=useDispatch();
    const operation=useSelector(getoperation);
    const todos=useSelector(getToDoList);
    console.log("opeartion",operation);
    useEffect(()=>{
        if(operation.status==="update"){
            if(todos.length>0){
                setTask(todos[operation.index])
            }
        }
    },[operation,todos])
    const handleTask=(e)=>{
        setTask(e.target.value);
    }
   const handleAddTask=()=>{
    if(task!==""){
        if(operation.status==="add"){
        dispatch(addToDo(task));
    }
    else{
        const payload={index:operation.index,task:task};
        const opeartion={status:"add",index:""}
        dispatch(editToDo(payload));
        dispatch(changeoperation(opeartion));
    }
        setTask("");
    }
   }
    return(
        <>
        <h1>{operation.status==="add"?("Add Task"):("Update Task")}</h1>
        <Box
          component="form"
          
          noValidate
          autoComplete="off"
        >
    
    <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleTask} value={task}  />
    
    <Button variant="contained" onClick={handleAddTask}>{operation.status==="add"?("Add Task"):("Update Task")}</Button>
        </Box>
    </>
    )
}
export default AddTask;