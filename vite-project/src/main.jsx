import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/main.scss'
import { createBrowserRouter, RouterProvider,Route,createRoutesFromElements } from "react-router-dom";
import Homepage from './pages/Homepage';
import Invoices from './pages/Invoices';
import Companies from './pages/Companies';
import Contacts from './pages/Contacts';
import Invoice from './pages/Invoice';
import Dashboard from './pages/dashboard/Dashboard';
import InvoicesDashboard from './pages/dashboard/InvoicesDashboard';
import CompaniesDashboard from './pages/dashboard/CompaniesDashboard';
import ContactsDashboard from './pages/dashboard/ContactsDashboard';
import Stats from './pages/dashboard/Stats';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="*" element={<Homepage/>}/>
    <Route path="/home" element={<Homepage/>}/>
    <Route path="/invoices" element={<Invoices/>}/>
    <Route path="/companies" element={<Companies/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
    <Route path="/invoices/{id}" element={<Invoice/>}/>
    <Route path="/dashboard" element={<Dashboard/>}>
      <Route path="/dashboard/" element={<Stats/>}/>
      <Route path="/dashboard/invoices" element={<InvoicesDashboard/>}/>
      <Route path="/dashboard/companies" element={<CompaniesDashboard/>}/>
      <Route path="/dashboard/contacts" element={<ContactsDashboard/>}/>
     </Route>

    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
