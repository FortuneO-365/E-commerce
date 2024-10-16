const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const passport = require("passport");

const initailizePassport = require("./passport-config");
initailizePassport(passport)

const app = express();
app.use(express.json());
app.use(cookieParser("hello"));
app.use(expressSession({
    secret: "fortune's app",
    saveUninitialized: false,
    resave: false,
    cookie : {
        httpOnly: true,
        maxAge : 60000 * 60 *24,
    }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "",
    database : "e-commerce"
})

app.get("/", (req,res)=>{
    // res.cookie("Hello", "Important info", {maxAge : 60000 * 60 * 2})
    return res.json("From Backed Side")
    // res.status(201).send("Hello")
})

app.listen(9000, ()=>{
    console.log("listening")
})

app.get("/customers", (req,res)=>{
    const sql = "SELECT * FROM customers";
    if(req.user){
        db.query(sql, (err, data)=>{
            if(err) return res.json(err);
            return res.json(data);
        })
    }else{
        return res.send("You need to login")
    }
})

app.post("/api/auth", passport.authenticate("local"), (req, res) => {
    // Passport has authenticated the user at this point
    const { email, password } = req.body;

    // If successful, req.user will have the authenticated user object
    if (req.user) {
        return res.status(200).json({ message: "Login successful", session: req.session });
    } else {
        return res.status(401).json({ message: "Authentication failed" });

    }
});

app.get("/api/auth/status", (req, res) => {
    if (!req.user) return res.status(401).json("User not available")
    return res.status(200).send(req.user)
})

app.post("/api/logout", (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        req.session = null;
        return res.status(400).json({ message: "Logged out successfully" });
    });
});
 
app.get("/products",(req,res)=>{
    if(req.user){
        const sql = "SELECT * FROM products";
        db.query(sql, (err ,data)=>{
            if(err) return res.json(err);
            return res.status(200).json(data)
        })
    }else{
        return res.sendStatus(403)
    }
})
