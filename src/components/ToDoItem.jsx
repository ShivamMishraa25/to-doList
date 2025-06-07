import React from 'react'

function ToDoItem({task, deleteTask}) {
    function handleDelete(e) {
        deleteTask(task.id);
    }




  return (
    <div className='TaskBox'>
        <button className='TickBtn'>✅</button>
        <p className='Task'>{task.task}</p>
        <button className='edit'>edit</button>
        <button onClick={handleDelete} className='delete'>🗑️</button>
    </div>
  )
}

export default ToDoItem;