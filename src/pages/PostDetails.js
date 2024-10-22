import React from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";
const PostDetails = ({ blog }) => {
  const params = useParams();
  return (
    <section>
      <div>{params.blogId}
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
      </div>
    </section>
  );
};
export default PostDetails;
