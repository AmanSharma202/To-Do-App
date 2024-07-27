import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import EventList from "./components/EventList";
import AddButton from "./components/AddButton";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (title, date, time, description) => {
    const nextId = tasks.length
      ? Math.max(...tasks.map((task) => task.id)) + 1
      : 1;

    const newTask = {
      id: nextId,
      title: title,
      date: date,
      time: time,
      description: description,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id); // CHANGED
    setEditingTask(taskToEdit); // NEW
  };

  return (
    <div className="App">
      <Header />
      <AddButton
        addTask={addTask}
        tasks={tasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
        setTasks={setTasks}
      ></AddButton>

      <EventList tasks={tasks} removeTask={removeTask} editTask={editTask} />
    </div>
  );
}
