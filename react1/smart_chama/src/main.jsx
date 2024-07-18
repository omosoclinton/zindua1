import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LandingPage from './components/Landing.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Account from './assets/pages/Account.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<LandingPage />
  },
  {
    path:'/account',
    element:<Account/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
