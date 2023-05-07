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
import AdmCreateProfile from './pages/AdmCreateProfile'
import AdmLogin from './pages/AdmLogin'
import Mainboard from './SEPages/Mainboard'
import About from './SEPages/About'
import Contact from './SEPages/Contact'
import StudentList from './SEPages/StudentList'
import StudentListCard from './SEPages/StudentListCard'
import StudentLogin from './SEPages/StudentLogin'
import StudentRegister from './SEPages/StudentRegister'
import ForgotPassword from './SEPages/ForgotPassword'
import CompanyLogin from './SEPages/CompanyLogin'
import CompanyRegister from './SEPages/CompanyRegister'
import 'bootstrap/dist/css/bootstrap.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Mainboard />},
      { path: '/stdregistration', element: <StdApprove />},
      { path: '/stdprofile', element: <StdCreateProfile />},
      { path: '/stddata', element: <StdEditData />},
      { path: '/empregistration', element: <EmpApprove />},
      { path: '/empprofile', element: <EmpCreateProfile />},
      { path: '/empdata', element: <EmpEditData />},
      { path: '/dash', element: <Dashboard />},
      { path: '/cmpprofile', element: <CmpCreateProfile />},
      { path: '/admdata', element: <AdmEditData />},
      { path: '/admprofile', element: <AdmCreateProfile />},
      { path: '/Home', element: <Home />},
      { path: '/admlog', element: <AdmLogin />},
      {path: "/About", element: <About />},
      {path: "/Contact", element: <Contact />},
      {path: '/StudentRegister', element:<StudentRegister />},
      {path: "/StudentLogin", element: <StudentLogin />},
      {path: "/ForgotPassword", element: <ForgotPassword />},
      {path: "/CompanyRegister", element: <CompanyRegister />},
      {path: "/CompanyLogin", element: <CompanyLogin />},
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <RouterProvider router={router} />
	</React.StrictMode>
)