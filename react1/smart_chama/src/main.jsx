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
import UserPage from './pages/UserPage.jsx'
import AccountComponent from './components/accounts/AccountsComponent.jsx'
import AuthProvider from './AuthProvider.jsx'
import UserMoreDetails from './components/UserMore.jsx'
import UpdateAccount from './components/UpdateUser.jsx'
import UserLanding from './components/UserLanding.jsx'
import Events from './pages/Events.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<LandingPage />
  },
  {
    path:'/login',
    element:<Login/>
  },
  ,
  {
    path:'/user',
    element:<UserLanding/>
  },
  {
    path:'/accounts',
    element:<AccountComponent/>
  },
  {
    path:'/financials',
    element:<Events/>
  },
  {
    path:'/viewmore',
    element:<UserMoreDetails/>
  },
  {
    path:'/updateuser',
    element:<UpdateAccount/>
  },
  {
    path:'/userpage',
    element:<UserPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>{<RouterProvider router = {router} />}</AuthProvider>
  </React.StrictMode>,
)



{
  // 
}
