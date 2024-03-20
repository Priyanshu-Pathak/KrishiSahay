import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Login from './Component/Login/Login';
import Layout from './Layout.jsx'
import Sign from './Component/Sign/Sign.jsx';
import Logout from './Component/Logout/Logout.jsx';
import About from './Component/About/About.jsx';
import Acknowledgement from './Component/Acknowledgement/Acknowledgement.jsx';
// import Navbar from './Component/ShopListing/Navbar.jsx';
import Header from './Component/Header/Header.jsx';
import LISTSTOREBUTTON from './Component/ShopListing/ListStoreButton.jsx';



const router=createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
  },
  {
    path:'/login',
    element:<Login/>,
  },
  {
    path:'/sign',
    element:<Sign/>
  },
  {
    path:'/logout',
    element:<Logout/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/acknowledgement',
    element:<Acknowledgement/>
  },
  {
    path:'/shoplisting',
    element:<Layout/>
  },
  {
    path:'/liststorebutton',
    element:<LISTSTOREBUTTON/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
