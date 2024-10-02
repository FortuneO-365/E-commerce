const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
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

app.post("/customers", (req, res) => {
    const sql = "SELECT * FROM `customers` WHERE Email = ? AND Password = ?"
    // const values = [
        
    // ]

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json("Login Failed");
        if(data.length > 0){
            return res.json(data)
        }else{
            return res.json("Username or password is incorrect")
        }
    })
})

app.get("/products",(req,res)=>{
    const sql = "SELECT * FROM products";
    db.query(sql, (err ,data)=>{
        if(err) return res.json(err);
        return res.status(200).json(data)
    })
})