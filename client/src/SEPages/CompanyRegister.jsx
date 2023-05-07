import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input }
    from 'reactstrap';


export default function CompanyRegister () {

    const[lastname, setLastname] = useState('')
    const[firstname, setFirstname] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[companyId, setCompanyId] = useState(0)
    const[companyName, setCompanyName] = useState('')
    const[companyEmail, setCompanyEmail] = useState('')

    
    
      const handleAdd = () => {
        const url = "https://localhost:44439/api/employerapproval"
        const data = {
            "employerFirstName": firstname,
            "employerLastName": lastname,
            "employerEmail": email,
            "employerPassword": password,
            "companyId": companyId,
            "companyName": companyName,
            "companyEmail": companyEmail
        }
        console.log(companyId+1)
        console.log(companyName)
        console.log(companyEmail)
        axios.post(url, data)
        .then((result)=>{
          console.log('Added')
          clear();
        })
        .catch((error) => {
          console.log(error)
        })
      }

      const clear=()=>{
        setEmail('')
        setFirstname('')
        setLastname('')
        setPassword('')
      }

    return (
        <Form className="login-form">

            <div className='cool'>
                <h2>Employer Sign up</h2>
            </div>


            <br />


            <FormGroup>
                <Label>First Name:</Label>
                <Input type="text" placeholder="First Name"
                    onChange={(event) => {
                        setFirstname(event.target.value);
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label>Last Name:</Label>
                <Input type="text" placeholder="Last Name"
                    onChange={(event) => {
                        setLastname(event.target.value);
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label>Employer Email:</Label>
                <Input type="email" placeholder="Employer Email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label>Password:</Label>
                <Input type="password" placeholder="Password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label>Company Name:</Label>
                <Input type="text" placeholder="Company Name"
                    onChange={(event) => {
                        setCompanyName(event.target.value);
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label>Company Email:</Label>
                <Input type="email" placeholder="Company Email"
                    onChange={(event) => {
                        setCompanyEmail(event.target.value);
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label>Company ID:</Label>
                <Input type="text" placeholder="Company ID"
                    onChange={(event) => {
                        setCompanyId(event.target.value);
                    }}
                />
            </FormGroup>
            <br />
            <Button onClick={handleAdd} className="btn-dark"  block >
                Sign up
            </Button>

            <br></br>

            <Link to="/"><Button>
                Home
            </Button>
            </Link>

        </Form>


    );
}