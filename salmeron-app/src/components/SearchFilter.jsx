import React, { useState } from "react";
import "../styles/styles.css";

export default function SearchFilter({ allTask, filter }) {
  const [searchQuery, setSearchQuery] = useState("");

  function searchInput(e) {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      filter(Array.isArray(allTask) ? allTask : []);
    } else {
      if (Array.isArray(allTask)) {
        const filtered = allTask.filter((item) =>
          (item.description || "").toLowerCase().includes(query.toLowerCase())
        );
        filter(filtered);
      } else {
        console.error("Expected allTask to be an array.");
      }
    }
  }

  return (
    <>
      <input
        className="search-input"
        type="text"
        value={searchQuery}
        onChange={searchInput}
        placeholder="Search by Assignee"
      />
    </>
  );
}
