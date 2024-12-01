import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          style={{ margin: "0 5px", backgroundColor: currentPage === index + 1 ? "#ccc" : "#fff" }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
