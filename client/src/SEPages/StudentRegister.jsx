import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Mainboard.css';


export default function StudentRegister () {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [confirm, setConfirm] = useState('')
    const [passwordError, setPasswordError] = useState(false);

    const clear=()=>{
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
        setConfirm('')
      }

    const validate = (event) => {
        setConfirm(event.target.value)
        setPasswordError(false)
    }

    const handleAdd = () => {
          const url = "https://localhost:44439/api/studentapproval"
          const data = {
              "studentfirstName": firstname,
              "studentlastName": lastname,
              "studentemail": email,
              "studentpassword": password
          }
          
          axios.post(url, data)
            .then((result)=>{
              console.log('Added')
              clear();
              console.log(data)
            })
            .catch((error) => {
              console.log(error)
            })
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="container">
            <h1 className="title">Vets2Tech Student Register</h1>
            <form onSubmit={handleAdd}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        className="form-control"
                        value={firstname}
                        onChange={handleFirstNameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        className="form-control"
                        value={lastname}
                        onChange={handleLastNameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Student
                </button>
                <div>
                    <a className="subtitle" href="/">Home</a>
                </div>      
            </form>
           
        </div>
    );
}