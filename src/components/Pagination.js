import React, { useState } from "react";

const Pagination = ({ blogsPerPage, totalBlogs, paginate }) => {
  const pageNumbers = [];

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  // Generate page numbers array
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      {pageNumbers.map((number) => (
        <button 
          onClick={() => paginate(number)}  // Corrected onClick
          className="number" 
          key={number}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;