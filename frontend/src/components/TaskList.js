import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="task-table-container">
      <h2>📋 Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks added yet!</p>
      ) : (
        <table className="task-table" border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Task</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Category</th>
              <th>Completed</th>
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
                <td>{task.completed ? '✅' : '❌'}</td>
                <td>
                  <button onClick={() => onEdit(index)}>✏️ Edit</button>
                  <button onClick={() => onDelete(index)}>🗑️ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
