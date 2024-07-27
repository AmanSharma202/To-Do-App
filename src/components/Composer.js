import { useState, useEffect } from "react";
export default function Composer({
  addTask,
  setAdd,
  tasks,
  editingTask,
  setEditingTask,
  setTasks,
}) {
  const [title, setTitle] = useState(editingTask ? editingTask.title : "");
  const [date, setDate] = useState(editingTask ? editingTask.date : "");
  const [time, setTime] = useState(editingTask ? editingTask.time : "");
  const [description, setDescription] = useState(
    editingTask ? editingTask.description : ""
  );

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDate(editingTask.date);
      setTime(editingTask.time);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSave = () => {
    if (title !== "" && date !== "" && time !== "" && description !== "") {
      if (editingTask) {
        // NEW
        const updatedTasks = tasks.map((task) =>
          task.id === editingTask.id
            ? { ...task, title, date, time, description }
            : task
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setEditingTask(null); // NEW: Clear the editing task
      } else {
        addTask(title, date, time, description);
      }
      setTitle("");
      setDate("");
      setTime("");
      setDescription("");
      setAdd(0);
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleClose = () => {
    setAdd(0);
    setEditingTask(null);
  };

  return (
    <div className="composer-context">
      <div className="add-modal-close">
        <input
          type="text"
          placeholder="Add Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input-field"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input-field"
        />
        <textarea
          className="input-field"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ height: "4.5rem", textAlign: "center" }}
          placeholder="Add Description"
          rows={5}
          cols={40}
        ></textarea>
        <div className="btn">
          <button onClick={handleSave} className="btn-modal save">
            Save
          </button>
          <button onClick={handleClose} className="btn-modal cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
