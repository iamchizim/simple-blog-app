import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ blog }) => {
  if (!blog || !blog.title || !blog.body) {
    return <p>No blog post available.</p>;
  }
  let slicedbody = blog.slice(0, 10);
  return (
    <section>
      <Link to={`/PostDetails/${blog}`}>
        <h2>{blog.title}</h2>
      </Link>
      <p>{slicedbody}</p>
    </section>
  );
};
export default BlogPost;
