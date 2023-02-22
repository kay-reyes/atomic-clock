import React, { useEffect, useState } from "react";
import moment from "moment";

function AtomicClock() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Atomic Clock</h1>
      <p>The current time is:</p>
      <p>{currentTime}</p>
    </div>
  );
}

export default AtomicClock;

