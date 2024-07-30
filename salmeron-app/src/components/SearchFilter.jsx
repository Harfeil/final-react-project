import React, { useState } from "react";
import PropTypes from "prop-types";
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
          (item.assignee || "").toLowerCase().includes(query.toLowerCase())
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

SearchFilter.propTypes = {
  allTask: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
    })
  ),
  filter: PropTypes.func.isRequired,
};

SearchFilter.defaultProps = {
  allTask: [],
};
