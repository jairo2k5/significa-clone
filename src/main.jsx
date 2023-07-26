import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/services',
        element: <h1>Services</h1>
      },
      {
        path: '/projects',
        element: <h1>Projects</h1>
      },
      {
        path: '/about',
        element: <h1>About</h1>
      },
      {
        path: '/get-a-quote',
        element: <h1>Get a Quote</h1>
      },
      {
        path: '/',
        element: <h1>Home</h1>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
