export default function Event({
  task,
  removeTask,
  editTask,
  handleShow,
  expanded,
}) {
  const handleRemove = () => {
    removeTask(task.id);
  };
  const handleEdit = function () {
    editTask(task.id);
  };

  return (
    <div className="container">
      <div className="event-entry">
        <div
          style={{
            width: "300px",
            marginright: "20px",
            maxWidth: "300px",
            overflowWrap: "break-word",
          }}
        >
          <h4 onClick={() => handleShow(task.id)} style={{ cursor: "pointer" }}>
            {task.title}
          </h4>
        </div>
        <div>
          <p>{task.date}</p>
        </div>
        <div>
          <p>{task.time}</p>
        </div>
        <button onClick={handleRemove} className="remove-localStorage">
          Delete
        </button>
        <button onClick={handleEdit} className="edit-localStorage">
          Edit
        </button>
      </div>
      <div></div>
    </div>
  );
}
