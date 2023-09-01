import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom"
import router from './routes/router.jsx'
import {Toaster} from "react-hot-toast"
import ContextProviders from './providers/contextProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProviders>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
    </ContextProviders>
  </React.StrictMode>,
)
