import React from 'react';
import { Link } from 'react-router-dom';
import './Mainboard.css';

import { Button, Form, FormGroup, Label, Input }
    from 'reactstrap';



export default function StudentLogin () {


    return (
        <Form className="login-form">


            <div className='cool'>
                <h2>Student Login</h2>
            </div>

            <br />

            <FormGroup>
                <Label>Email (Personal Email)</Label>
                <Input type="email" placeholder="Email"
                />
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password"

                />
            </FormGroup>
            <br />
            <Button className="btn-dark" block >
                Sign in
            </Button>

            <br>
              
            </br>
            <Link to="/">
            <Button className="btn-dark" block >
                HOME
            </Button> 
            </Link>
            <div className="text-center">
                <a href="/ForgotPassword">Forgot Password</a>
            </div>



        </Form>


    );
}