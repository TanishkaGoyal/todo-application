import React, { useState } from 'react';

const Task = ({ task, onUpdateTask, onDeleteTask }) => {
  const [isChecked, setIsChecked] = useState(task.completed);

  const handleCheckChange = () => {
    setIsChecked(!isChecked);
    onUpdateTask(task._id, !isChecked); // Call onUpdateTask to update the task's status
  };

  const handleDelete = () => {
    onDeleteTask(task._id); // Call onDeleteTask to delete the task
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckChange}
        className="task-checkbox"
      />
      <span className={isChecked ? "task-title completed" : "task-title"}>{task.title}</span>
      <button onClick={handleDelete} className="delete-task-btn">Delete</button>
    </div>
  );
};

export default Task;
