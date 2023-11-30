import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider  } from 'react-router-dom';
import Dashboard from './ProtectedPages/dashboard'
import Store from './ProtectedPages/store';




const router = createBrowserRouter([
  


  {
    path:'/',
    element:<App />
  },
  {
    path:'/dashboard',
    element:<Dashboard />
  },

  {
    path:'/store',
    element:<Store />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <RouterProvider router={router} />

);

