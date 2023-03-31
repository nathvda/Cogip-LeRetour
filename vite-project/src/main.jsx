import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/main.scss'
import { createBrowserRouter, RouterProvider,Route,createRoutesFromElements } from "react-router-dom";
import Homepage from './pages/Homepage';
import Invoices from './pages/Invoices';
import Companies from './pages/Companies';
import Contacts from './pages/Contacts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="*" element={<Homepage/>}/>
    <Route path="/home" element={<Homepage/>}/>
    <Route path="/invoices" element={<Invoices/>}/>
    <Route path="/companies" element={<Companies/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
