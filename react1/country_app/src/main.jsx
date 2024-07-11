import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './assets/pages/Home.jsx';
import MorePage from './assets/pages/MorePage.jsx';
import ContinentPage from './assets/pages/ContinentPage.jsx';
import Neiba from './assets/components/Neiba.jsx';

import SearchBar from './assets/components/SearchBar.jsx';
//import CountryCard from './components/CountryCard.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/country',
    element: <MorePage/>
  },
  {
    path:'/continent',
    element: <ContinentPage/>
  },
  {
    path:'/neiba',
    element: <Neiba/>
  },
  {
    path:'/search',
    element: <SearchBar/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
