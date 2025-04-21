import React, { useState } from 'react';
import Clock from './components/Clock';  // Assuming you have Clock component
import Notepad from './components/Notepad';  // Assuming you have Notepad component
import AddTask from './components/AddTask';  // Your AddTask component
// import TaskList from './components/TaskList'; // not used

import Calendar from './components/Calendar';  // The Calendar component

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTask, setEditingTask] = useState({
    text: '',
    dueDate: '',
    priority: '',
    category: ''
  });

  const handleAdd = (newTask) => {
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = newTask;
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditingTask({ text: '', dueDate: '', priority: '', category: '' });
    } else {
      setTasks([...tasks, newTask]);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const taskToEdit = tasks[index];
    setEditingTask(taskToEdit);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleSaveEditedTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = editingTask;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingTask({ text: '', dueDate: '', priority: '', category: '' });
  };

  const handleChange = (e) => {
    setEditingTask({ ...editingTask, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <h1>📝 To-Do List Application</h1>
      
      {/* Render Clock and Notepad Components */}
      <Clock />
      <Notepad />
      
      {/* Render the Calendar Component */}
      <Calendar />

      {/* Render the AddTask Form */}
      <AddTask onAdd={handleAdd} />
      
      {/* Render the Task List in Table Format */}
      <div className="task-list">
        <h2>Your Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks added yet!</p>
        ) : (
          <table className="task-table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.text}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.priority}</td>
                  <td>{task.category}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Edit Task Form */}
      {editingIndex !== null && (
        <div className="edit-task">
          <h3>Edit Task</h3>
          <input
            type="text"
            name="text"
            value={editingTask.text}
            onChange={handleChange}
            placeholder="Task Name"
          />
          <input
            type="date"
            name="dueDate"
            value={editingTask.dueDate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="priority"
            value={editingTask.priority}
            onChange={handleChange}
            placeholder="Priority"
          />
          <input
            type="text"
            name="category"
            value={editingTask.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <button onClick={handleSaveEditedTask}>Save</button>
        </div>
      )}
    </div>
  );
}

export default App;
