import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Product from './components/ProductCard.jsx';
import ProductData from './components/ProductData.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/products',
    element:<ProductData/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
