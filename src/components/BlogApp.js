import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import LoadingMessage from "./Loading";
import ErrorMessage from "./ErrorMessage";
import Pagination from "./Pagination";

const BlogApp = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(" ");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(10);

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("No blogs were found");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      setErrorMessage(error.message);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
   
  };

  useEffect(() => {
    fetchBlogPost();
  }, []);
  
  // get current posts
  const indexOfLastPost = currentPage * blogsPerPage
  const indexOfFirstPost = indexOfLastPost - blogsPerPage
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost)

  // function to change page
  const paginate = pageNumber => setCurrentPage(pageNumber)
  return(
    <section>
        <h2>My Blog</h2>
        {loading && <LoadingMessage/>}
        {errorMessage && <ErrorMessage message ={errorMessage}/>}
        <BlogList blogs={currentPosts}/>
        <Pagination blogsPerPage={blogsPerPage} totalBlogs={blogs.length} paginate ={paginate} currentPage ={currentPage}/>
    </section>
  )
};

export default BlogApp;
