import React from "react";
import BlogPost from "./BlogPost";

const BlogList = ({ title, content, author }) => {
  return (
    <section>
      {blogs.map((blog) => (
        <BlogPost
          key={blog}
          title={title}
          content={content}
          author={author.name}
        />
      ))}
    </section>
  );
};

export default BlogList