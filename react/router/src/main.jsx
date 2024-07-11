import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import Settings from './components/settings.jsx';
import ErrorMsg from './components/ErrorPage.jsx';
import Users from './components/Users.jsx';
import UserProfile from './components/UserProfile.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProfileChild from './components/ProfileChild.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<ErrorMsg/>
  },
  {
    path:'/profile',
    element:<Profile/>,
    children: [
      {
        path:'/profile/:profileId',
        element:<ProfileChild/>
      }
    ]
  },
  {
    path:'/profile/:profileId',
    element:<Profile/>
  },
  {
    path:'/settings',
    element:<Settings/>
  },
  {
    path:'/settings/:settingsId',
    element:<Settings/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/users',
    element:<Users/>
  },
  {
    path:'/userprofile',
    element:<UserProfile/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
