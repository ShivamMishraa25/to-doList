import React, { useState } from 'react'
import './style.css';

function ToDoItem({task, deleteTask, editTask}) {
    const [status, setStatus] = useState(task.isComplete);
    function handleDelete(e) {
        deleteTask(task.id);
    }
    function handleEdit(e) {
        editTask(task.id);
    }
    function handleDone() {
        status?setStatus(false):setStatus(true);
    }




  return (
    <div className='TaskBox'>
        <button onClick={handleDone} className='TickBtn'>{status?"✅":"🟦"}</button>
        <p className='Task' style={status?{textDecoration:'line-through'}:{}}>{task.task}</p>
        <button onClick={handleEdit} className='edit'>edit</button>
        <button onClick={handleDelete} className='delete'>🗑️</button>
    </div>
  )
}

export default ToDoItem;