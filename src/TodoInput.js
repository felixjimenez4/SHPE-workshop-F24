import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState(''); // Local state to track input

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    if (inputValue.trim()) {
      addTask(inputValue); // Call the addTask function from parent
      setInputValue(''); // Clear input field
    }
  };

  return (
    <form onSubmit={handleSubmit} class='in'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoInput;
