import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import App from './App'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import StdApprove from './pages/StdApprove'
import StdCreateProfile from './pages/StdCreateProfile'
import StdEditData from './pages/StdEditData'
import EmpApprove from './pages/EmpApprove'
import EmpCreateProfile from './pages/EmpCreateProfile'
import EmpEditData from './pages/EmpEditData'
import Dashboard from './components/Dashboard'
import CmpCreateProfile from './pages/cmpCreateProfile'
import AdmEditData from './pages/AdmEditData'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home />},
      { path: '/stdregistration', element: <StdApprove />},
      { path: '/stdprofile', element: <StdCreateProfile />},
      { path: '/stddata', element: <StdEditData />},
      { path: '/empregistration', element: <EmpApprove />},
      { path: '/empprofile', element: <EmpCreateProfile />},
      { path: '/empdata', element: <EmpEditData />},
      { path: '/dash', element: <Dashboard />},
      { path: '/cmpprofile', element: <CmpCreateProfile />},
      { path: '/admdata', element: <AdmEditData />}
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <RouterProvider router={router} />
	</React.StrictMode>
)