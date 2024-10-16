import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className='list'>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
