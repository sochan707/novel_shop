import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFoundPage from './NotFoundPage.jsx'
import Shop from './Shop.jsx'
import BlogPage from './Blog.jsx'
import ContactPage from './Contact.jsx'

const router = createBrowserRouter([
  { path: "/",        element: <App /> },
  { path: "/shop",    element: <Shop /> },
  { path: "/blog",    element: <BlogPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "*",        element: <NotFoundPage /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)