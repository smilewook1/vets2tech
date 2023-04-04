import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import App from './App'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import ApprvRgst from './pages/ApprvRgst'
import CreateProfile from './pages/CreateProfile'
import EditData from './pages/EditData'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home />},
      { path: '//signin', element: <SignIn />},
      { path: '//signup', element: <SignUp />},
      { path: '/registration', element: <ApprvRgst />},
      { path: '/profile', element: <CreateProfile />},
      { path: '/data', element: <EditData />}
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <RouterProvider router={router} />
	</React.StrictMode>
)