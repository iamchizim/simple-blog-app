import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BlogApp from './components/BlogApp';
import NotFoundPage from './pages/NotFoundPage';
import PostDetails from './pages/PostDetails';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogApp/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: '/PostDetails/:blogId',
    element: <PostDetails/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <RouterProvider router={router}/>
  </React.StrictMode>
);


