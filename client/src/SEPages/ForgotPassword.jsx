import React from 'react';

import { Link } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input }
    from 'reactstrap';

export default function ForgotPassword () {
    return (
        <Form className="login-form">

            <h2>Sign Up</h2>
            <br />

            <FormGroup>
                <Label>Email (associated with password)</Label>
                <Input type="email" placeholder="Email" />
            </FormGroup>

            <br />
            <Button className="btn-dark" bsStyle="primary" bsSize="large" block >
                Submit
            </Button>

            <br></br>

            <Link to="/"><Button>
                Go back to home
            </Button>
            </Link>

        </Form>



    );
}