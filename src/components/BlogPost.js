import React from "react";
;
const BlogPost = ({ blog }) => {
  return (
    <section>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <p>
        <strong>Author:</strong> {blog.author.name || "Unknown"}
      </p>
    </section>
  );
};
export default BlogPost;
