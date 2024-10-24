import { useLocation } from 'react-router-dom';

const PostDetails = () => {
  const location = useLocation();
  const { blog } = location.state || {}; // Access blog from the location state

  if (!blog) {
    return <div>No blog post found</div>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </div>
  );
};

export default PostDetails;

