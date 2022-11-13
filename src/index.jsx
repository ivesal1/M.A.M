import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import UserContext from './context/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext>
    <RouterProvider router={routes} />
  </UserContext>
);

