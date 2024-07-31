import React, { useState } from "react";
import "../styles/styles.css";

export default function Task({
  description,
  assignee,
  deadline,
  status,
  index,
}) {
  const [myStatus, setMyStatus] = useState(status);

  function eventHandler() {
    if (myStatus === "Pending") {
      setMyStatus("Completed");
    }
  }

  return (
    <>
      <div className="list-div">
        <h3 className="id-display">ID: {index + 1}</h3>
        <h2 className="description-display">{description}</h2>
        <div>
          <h3 className="assignee-display">
            Assignee: <span className="assignee">{assignee}</span>
          </h3>
          <h3 className="deadline-display">
            Deadline: <span className="deadline">{deadline}</span>
          </h3>
          <h3 className="status-display">
            Status:{" "}
            <span
              className="status"
              style={{ color: myStatus === "Pending" ? "Red" : "Green" }}
            >
              {myStatus}
            </span>
          </h3>
        </div>
        <button className="toggleBtn" onClick={eventHandler}>
          Toggle Status
        </button>
      </div>
    </>
  );
}
