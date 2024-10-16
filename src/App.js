import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]); // State for storing tasks

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]); // Append the new task
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return { ...task, completed: !task.completed }; // Toggle completion
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (e,index) => {
    e.stopPropagation();
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index); // Remove task
    setTasks(updatedTasks);
  };

  return (
    <div class='app'>
        <div className="interface">
            <h1>Todo App</h1>
            <TodoInput addTask={addTask} />
        </div>
        <TodoList
            tasks={tasks}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
        />

    </div>
  );
};

export default App;
