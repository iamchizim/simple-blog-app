import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ blog }) => {
  if (!blog || !blog.title || !blog.body) {
    return <p>No blog post available.</p>;
  }

  return (
    <section>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </section>
  );
};
export default BlogPost;
