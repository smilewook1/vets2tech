import React from 'react';

import { Link } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input }
    from 'reactstrap';



export default function CompanyLogin () {
    return (
        <Form className="login-form">

            <div className='cool'>
                <h2>Company Login</h2>
            </div>


            <br />

            <FormGroup>
                <Label>Email:</Label>
                <Input type="email" placeholder="Email"

                />
            </FormGroup>

            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password"/>
            </FormGroup>


            <br />
            <Button className="btn-dark" block >
                Login
            </Button>


            <br></br>

            <Link to="/"><Button>
                Go to Home Page
            </Button>
            </Link>

        </Form>


    );
}