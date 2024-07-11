import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Settings from './components/Settings.jsx'
import NotFoundPage from './components/tools/NotFound.jsx'
import ProfilesPage from './components/ProfilesPage.jsx';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement: <NotFoundPage/>
  },
  {
    path:'/ProfilesPage',
    element:<ProfilesPage/>,
    children:  [
      {
      path:'/ProfilesPage/:profileID',
      element:<Profile/>
      }
  ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
