import { useState, useEffect } from "react";
import Composer from "./Composer";
export default function AddButton({
  addTask,
  tasks,
  editingTask,
  setEditingTask,
  setTasks,
}) {
  const [add, setAdd] = useState(0);

  useEffect(() => {
    // NEW
    if (editingTask) {
      setAdd(1);
    }
  }, [editingTask]);
  return (
    <div
      style={{
        marginTop: "25px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button onClick={() => setAdd(1)} className="event-add">
        {"+"} Compose
      </button>
      {add > 0 && (
        <Composer
          addTask={addTask}
          setAdd={setAdd}
          tasks={tasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          setTasks={setTasks}
        />
      )}
    </div>
  );
}
