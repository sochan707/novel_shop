import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFoundPage from './NotFoundPage.jsx'
import Shop from './Shop.jsx'
import BlogPage from './Blog.jsx'
import ContactPage from './Contact.jsx'
import Homepage from './Homepage.jsx'
import SingleProduct from './SingleProduct.jsx'
import { CartProvider } from './Component/CartContext.jsx'
import Cart from './Cart.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/home", element: <Homepage/> },
  { path: "/shop", element: <Shop/> },
  { path: "/product/:id", element: <SingleProduct /> },
  { path: "/blog", element: <BlogPage/> },
  { path: "/contact", element: <ContactPage/> },
  { path: "/checkout", element: <Cart /> },
  { path: "*", element: <NotFoundPage/> },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)