import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import App from './App'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import ApprvRgst from './pages/StdApprove'
import CreateProfile from './pages/StdCreateProfile'
import EditData from './pages/StdEditData'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home />},
      { path: '/signin', element: <SignIn />},
      { path: '/signup', element: <SignUp />},
      { path: '/registration', element: <ApprvRgst />},
      { path: '/profile', element: <CreateProfile />},
      { path: '/data', element: <EditData />},
      { path: '/dash', element: <Dashboard />}
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <RouterProvider router={router} />
	</React.StrictMode>
)