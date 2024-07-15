import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './pages/Home.jsx';
import Landing from './pages/Landing.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Modal from './components/Modal.jsx';
import Form from './components/Form.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Landing/>
  },
  {
    path:'/houses',
    element:<Home/>
  },
  {
    path:'/modalform',
    element:<Form/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

