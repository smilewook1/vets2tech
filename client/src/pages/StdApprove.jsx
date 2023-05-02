import React, {useState, useEffect, Component} from 'react';
import { Snackbar } from '@mui/material';
import axios from 'axios';
import EnhancedTable from '../components/TableSet';

class StdApprove extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            lastname: '',
            firstname: '',
            email: '',
            password: '',
            mod: '',
            barOpen: false,
            
        };
        this.handlebarClose = this.handlebarClose.bind(this);
    }

    handlebarClose = () => {
        this.setState({ barOpen: false })
    };

    setBar(mod) {
        return (
          <Snackbar open={this.state.barOpen} autoHideDuration={6000} message={mod} onClose={this.handlebarClose}>
           
          </Snackbar>
        );
      }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get("https://localhost:44439/api/student")
            .then((result) => {
                this.setState({ data: result.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleDelete = (selected) => {
        if (window.confirm("Are you sure?") === true) {
            axios.delete(`https://localhost:44439/api/student/${selected}`)
                .then((result) => {
                    if (result.status === 200) {
                        console.log(`Deleted`)
                        this.getData();
                        this.setState({ barOpen: true })
                        this.setState({ mod: 'deleted'})
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    handleAdd = () => {
        const url = "https://localhost:44439/api/student"
        const data = {
            "firstName": this.state.firstname,
            "lastName": this.state.lastname,
            "email": this.state.email,
            "passwordHash": this.state.password
        }
        axios.post(url, data)
            .then((result) => {
                this.getData()
                this.clear();
                
            })
    }

    clear = () => {
        this.setState({
            email: '',
            firstname: '',
            lastname: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <EnhancedTable 
                    data = {this.state.data}
                    handleDelete={(selected) => this.handleDelete(selected)}
                    handleAdd = {this.handleAdd} 
                />
            </div>
        );
    }
}

export default StdApprove;