const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '1080Wodnr@',
    database: 'employee',
});

app.post("/signup/aa", (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const pwd = req.body.pwd;

    db.query('INSERT INTO employee_info (firstname, lastname, email, password) VALUES (?,?,?,?)', 
    [fname, lname, email, pwd], 
    (err, result) => {
        if (err) {
            console.log(err)
        }else{
            res.send("Successfully inserted");
        }
    });
});

app.listen(3001, ()=> {
    console.log("Your server is running on port 3001");
}) 