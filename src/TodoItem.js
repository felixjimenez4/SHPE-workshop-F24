import React from 'react';

const TodoItem = ({ task, index, toggleTaskCompletion, deleteTask }) => {
  return (
    <li class={task.completed ? 'item done' : 'item' } onClick={() => toggleTaskCompletion(index)}>
      <span>{task.text}</span>
      <button onClick={(e) => deleteTask(e,index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
