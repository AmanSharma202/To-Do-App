import React, { useState, useEffect } from "react";
export default function Header() {
  const date = new Date().toLocaleDateString();
  // const time = new Date().toLocaleTimeString();

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    //Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header-date-format">
      <h3>Date: {date}</h3>
      <h2>To-Do List</h2>
      <h3>
        Time:
        {time.toLocaleTimeString()}
      </h3>
    </div>
  );
}
