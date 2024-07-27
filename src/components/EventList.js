import { useState } from "react";
import React from "react";
import Event from "./Event";
import EventDesc from "./EventDesc";
export default function EventList({ tasks, removeTask, editTask }) {
  const [expandedEventId, setExpandedEventId] = useState(null);
  const handleShow = (id) =>
    setExpandedEventId((prevId) => (prevId === id ? null : id));

  return (
    <div className="central">
      <div className="event-list">
        {tasks.map((task) => (
          <React.Fragment key={task.id}>
            <Event
              task={task}
              removeTask={removeTask}
              editTask={editTask}
              handleShow={handleShow}
              expanded={expandedEventId === task.id}
            />
            {expandedEventId === task.id && <EventDesc task={task} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
