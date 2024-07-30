import React, { useState } from "react";
import Task from "./Task";
import "../styles/styles.css";
import SearchFilter from "./SearchFilter";

export default function Tasks() {
  const tasks = [
    {
      description: "Capstone",
      assignee: "John",
      deadline: "10",
      status: "Pending",
    },
    {
      description: "Chapter 1",
      assignee: "Jane",
      deadline: "11",
      status: "Pending",
    },
    {
      description: "Chapter 2",
      assignee: "Mike",
      deadline: "12",
      status: "Pending",
    },
    {
      description: "Chapter 3",
      assignee: "Jane",
      deadline: "13",
      status: "Pending",
    },
    {
      description: "Chapter 4",
      assignee: "Mike",
      deadline: "14",
      status: "Pending",
    },
    {
      description: "Chapter 5",
      assignee: "John",
      deadline: "15",
      status: "Pending",
    },
    {
      description: "Chapter 6",
      assignee: "Jane",
      deadline: "16",
      status: "Pending",
    },
    {
      description: "Chapter 7",
      assignee: "Mike",
      deadline: "17",
      status: "Completed",
    },
    {
      description: "Chapter 8",
      assignee: "Jane",
      deadline: "18",
      status: "Completed",
    },
    {
      description: "Chapter 9",
      assignee: "Lisa",
      deadline: "19",
      status: "Completed",
    },
    {
      description: "Chapter 10",
      assignee: "Lisa",
      deadline: "20",
      status: "Completed",
    },
  ];

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  function handleFilter(filteredTasks) {
    setFilteredTasks(filteredTasks);
  }

  return (
    <>
      <div className="maindiv">
        <div className="title-container">
          <h1 className="title">Task List</h1>
          <div className="search-container">
            <SearchFilter allTask={filteredTasks} filter={handleFilter} />
          </div>
        </div>
        <div className="task-list-container">
          {filteredTasks.map((task, index) => (
            <Task
              key={index}
              index={index}
              description={task.description}
              assignee={task.assignee}
              deadline={task.deadline}
              status={task.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}
