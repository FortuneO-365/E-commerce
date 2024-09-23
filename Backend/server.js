const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "",
    database : "e-commerce"
})

app.get("/", (req,res)=>{
    return res.json("From Backed Side")
})

app.listen(9000, ()=>{
    console.log("listening")
})

app.get("/customers", (req,res)=>{
    const sql = "SELECT * FROM customers";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})