 import React, { useEffect, useRef, useState } from 'react'
 import axios from "axios"
 import "./signin.css";
import { useNavigate } from 'react-router-dom';
import Main from '../main/Main';
 
 function SignIn() {

    const [showError, setShowError] = useState(true);
    const [loading , showLoading] = useState(false);
    const [email , setEmail ] = useState("");
    const [password , setPassword] = useState("");
    const [errorMsg , setErrorMsg] = useState("");

    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    const navigate = useNavigate();
    
    const toggleShowError = () =>{
        setShowError(true);
    }
     
    const showAnimation = () => {
        showLoading(true);
        setTimeout(() => {
            showLoading(false);
        }, 3000)
        toggleShowError();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        showAnimation();
        console.log(email);
        console.log(password);
        axios.post("http://localhost:9000/customers", {email,password})
        .then(res => {
            res.data == "Username or password is incorrect" ? 
                setErrorMsg("Username or password is incorrect")
            :
                navigate('/');
                console.log(res.data)
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <div className='login-container'>
                <div className='form-container'>

                    <form onSubmit={handleSubmit}>
                        <div className='login-header'>
                            <h1>
                                Login
                            </h1>
                        </div>
                        <div className="login-email active">
                            <label htmlFor="email">Email Address</label>
                            <input 
                             ref={inputRef} 
                             type="email" 
                             value={email} 
                             onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login-email active">
                            <label htmlFor="password">Password</label>
                            <input 
                             ref={inputRef2} 
                             type="password" 
                             value={password} 
                             onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        {
                            showError ?
                                <div className='login-error-message'>
                                    <p>
                                        {errorMsg}
                                    </p>
                                </div>
                            :
                                <></>
                        }

                        <div className='login-extras'>
                            <p>
                                Forgot Password?
                            </p>
                            <p>
                                New Here? Sign-Up
                            </p>
                        </div>
                        <div className='login-button'>
                            <button>Sign In</button>
                        </div>
                        {
                            loading ?
                                <div className='loading-container'>
                                    <div className='loader'></div>
                                </div>
                            :
                                <></>   
                        }
                    </form>
                </div>
            </div>
        </>
    )
 }
 
 export default SignIn  
 