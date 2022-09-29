import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Error from './pages/Error'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
)
