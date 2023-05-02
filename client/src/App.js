import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <main>
      
      <Outlet/>
    </main>
  )
}
