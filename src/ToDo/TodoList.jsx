import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleCompletion = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  return (
    <div className="todo-wrapper">
      <h1 className="todo-title">Organize, Execute, Triumph.</h1>
      <p className="todo-subtitle">
        Unesi svoje dnevne aktivnosti i označi ih kada ih završiš!
      </p>

      <div className="input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Unesi novu aktivnost..."
        />
        <button onClick={handleAddTask}>Dodaj</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleCompletion(index)}>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;