import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { Outlet } from 'react-router-dom'
import Mainboard from './SEPages/Mainboard';
import StudentRegister from './SEPages/StudentRegister';
import StudentList from './SEPages/StudentList';
import StudentLogin from './SEPages/StudentLogin';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  )
}
