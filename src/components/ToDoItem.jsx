import React from 'react'

function ToDoItem({task}) {
  return (
    <div className='TaskBox'>
        <button className='TickBtn'>✅</button>
        <p className='Task'>{task.task}</p>
        <button className='edit'>edit</button>
        <button className='delete'>🗑️</button>
    </div>
  )
}

export default ToDoItem;