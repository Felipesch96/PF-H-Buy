import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LandingPage from "./components/views/landingPage/LandingPage.jsx"
import Home from './components/views/home/Home';

const router=createBrowserRouter([
  {
    path:"/",
    element:<div><LandingPage/></div>
  },
  {
    path:"/home",
    element:<h1><Home/></h1>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);