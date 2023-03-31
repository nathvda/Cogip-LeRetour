import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/main.scss'
import { createBrowserRouter, RouterProvider,Route,createRoutesFromElements } from "react-router-dom";
import Homepage from './pages/Homepage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="*" element={<Homepage/>}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
