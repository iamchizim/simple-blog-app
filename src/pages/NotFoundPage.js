import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <section>
      <h1>404 Not Found</h1>
      <Link to='/'>Blog List</Link>
    </section>
  );
};
export default NotFoundPage;
