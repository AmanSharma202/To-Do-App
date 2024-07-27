export default function EventDesc({ task }) {
  return (
    <div className="desc">
      <b>Description:</b>
      {task.description}
    </div>
  );
}
