import React from "react";
import BlogPost from "./BlogPost";

const BlogList = ({ blogs }) => {
  return (
    <section>
      {blogs.map((blog) => (
        <BlogPost blog={blog} key={blog.id} />
      ))}
    </section>
  );
};

export default BlogList;
