import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import Home from './pages/Home';

export default function App() {
  return (
    <main>
      
      <Outlet/>
    </main>
  )
}
