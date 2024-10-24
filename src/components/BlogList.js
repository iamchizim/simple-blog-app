import React from "react";

import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          {/* Pass blog data through the state */}
          <Link to={`/PostDetails/${blog.id}`} state={{ blog }}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
