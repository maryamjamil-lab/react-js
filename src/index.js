import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Chef from './Pages/Chef';
import Reviews from './Pages/Reviews';
import Contact from './Pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allroutes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home/>
    },
     {
      path: 'about',
      element: <About/>
    },
     {
      path: 'menu',
      element: <Menu/>
     },
    {
      path: 'chef',
      element: <Chef/>
    },
    {
      path: 'reviews',
      element: <Reviews/>
    },
    {
      path: 'contact',
      element: <Contact/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allroutes}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
