import React from 'react';
import './Mainboard.css';
import { Link } from 'react-router-dom';
import {  Form }
    from 'reactstrap';
import NavMenu from './NavMenu';
export default function Mainboard () {

    return (
        <Form >
            <NavMenu></NavMenu>
            <div className='fun'>

                <Link to='/StudentRegister'>
                    <button className="btn btn-danger btn-circle btn-xl">
                        Student Register
                    </button>
                </Link>

                <Link to="/StudentLogin">
                    <button className="btn btn-success btn-circle btn-xl" >
                        Student Login
                    </button>
                </Link>

                <Link to="/CompanyRegister">
                    <button className="btn btn-warning btn-circle btn-xl" >
                        Employer Register
                    </button>
                </Link>

                <Link to="/CompanyLogin">
                    <button className="btn btn-secondary btn-circle btn-xl" >
                        Employer Login
                    </button>
                </Link>
            </div>
            <br />
        </Form>

    );

}