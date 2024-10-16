import React from "react";
import { useState, useEffect } from "react";

const generateBlogDetails =() =>{
    const [blogs, setBlogs]  = useState(null)
useEffect(()=>{
  const data =   fetch("https://dev.to/api/articles")
})
}