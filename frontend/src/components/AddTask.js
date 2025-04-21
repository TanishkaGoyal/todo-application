import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return; // Don't submit if task is empty

    const newTask = {
      text: task,
      dueDate,
      priority,
      category,
      completed: false, // New tasks are not completed by default
    };

    onAdd(newTask);
    setTask('');
    setDueDate('');
    setPriority('Medium');
    setCategory('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">🔴 High</option>
        <option value="Medium">🟡 Medium</option>
        <option value="Low">🟢 Low</option>
      </select>
      <input
        type="text"
        placeholder="Category (e.g. Work, Home)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">➕ Add Task</button>
    </form>
  );
};

export default AddTask;
