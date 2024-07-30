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
        <ul className="list-container">
          <li>
            <span className="headers">ID</span> : {index + 1}
          </li>
          <li>
            <span className="headers">Description</span>: {description}
          </li>
          <li>
            <span className="headers">Assignee</span>: {assignee}
          </li>
          <li>
            <span className="headers">Deadline</span>:{" "}
            {myStatus === "Completed" ? "" : deadline}
          </li>
          <li>
            <span className="headers">Status</span>: {myStatus}
          </li>
        </ul>
        <button className="toggleBtn" onClick={eventHandler}>
          Toggle Status
        </button>
      </div>
    </>
  );
}
