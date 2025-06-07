import React, { useState } from 'react'
import ToDoItem from './ToDoItem';
import { tasks } from '../utils/tasks';

function ToDoList() {
    const [val, setVal] = useState("");
    const [taskArr, setTaskArr] = useState(tasks);
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(e) {
        setVal(e.target.value);
    }
    function handleClick() {
        if(val=="") {
            alert("Please enter a task");
            return;
        }
        if(isEditing) {

        }
        const newTask = {
            id: taskArr.length+1,
            task: val,
            isComplete: false
        };
        setTaskArr([...taskArr, newTask]);
        setVal("");
    }
    function handleKey(e) {
        e.key=='Enter'&&handleClick()
    }

    function deleteTask(id) {
        const deletedArr = taskArr.filter(task=>task.id !== id);
        setTaskArr(deletedArr);
    }
    function editTask(id) {
        const task = taskArr.find(task=>task.id==id);
        setVal(task.task);
        setIsEditing(true);
        
    }

  return (
    <>
        <section className='addSection'>
            <input onKeyDown={handleKey} onChange={handleChange} value={val} className='addInput'></input>
            <button onClick={handleClick} className='addBtn'>{isEditing?"Save Changes":"Add a Task"}</button>
        </section>
        <section className='ListSection'>
            {taskArr.map((task)=>{
                return(
                    <ToDoItem deleteTask={deleteTask} task={task} key={task.id}/>
                )
            })}
        </section>
        <button onClick={()=>editTask(3)}>edit 3</button>
    </>
  )
}

export default ToDoList;