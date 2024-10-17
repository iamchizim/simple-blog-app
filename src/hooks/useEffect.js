import React from "react";
import { useState, useEffect } from "react";

const generateBlogDetails = () => {
  const [blogs, setBlogs] = useState(null);

  const fetchBlogData = async () => {
    const response = await fetch("https://dev.to/api/articles");
    const data = await response.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  console.log(blogs)
};
export default generateBlogDetails;
