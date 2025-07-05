import React, { useState } from "react";
import { useTasks } from "../Components/kontekst";
import './TodoList.css'

const ToDoList = () => {
  const { tasks, setTasks } = useTasks();
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        {
          text: newTask,
          completed: false,
          date: new Date().toDateString(), // za statistiku
        },
      ]);
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
      <h1>Organize, Execute, Triumph.</h1>
      <div className="todo-flex">
      <input
      className='input-unos'
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Unesi novu aktivnost..."
      />
      <button className="dugme" onClick={handleAddTask}>Dodaj</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            className="taskovi"
            key={index}
            onClick={() => toggleCompletion(index)}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;