import React, { useState } from 'react'
import ToDoItem from './ToDoItem';
import { tasks } from '../utils/tasks';

function ToDoList() {
    const [val, setVal] = useState("");
    const [newTask, setNewTask] = useState({});
    function handleChange(e) {
        setVal(e.target.value);
    }
    function addBtn() {
        setNewTask({task: {val}, isComplete: false, id: tasks.length+1})
        tasks.push(newTask);
        setVal("");
    }

  return (
    <>
        <section className='addSection'>
            <input onChange={handleChange} value={val} className='addInput'></input>
            <button className='addBtn'>search</button>
        </section>
        <section className='ListSection'>
            {tasks.map((task)=>{
                return(
                    <ToDoItem task={task} key={task.id}/>
                )
            })}
        </section>
    </>
  )
}

export default ToDoList;