import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./signup.css"

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [confirmError, setConfirmError] = useState(false);

    const passwordRef = useRef(null);
    const confirmRef = useRef(null);

    const showPasswordError = (e) => {
        setPassword(e.target.value)
        password.length < 7 || password.length > 29     
        

        // console.log(password.length)
    }

    const showConfirmError = (e) => {
        setConfirm(e.target.value)
        confirm.toString() === password.toString() ?
            setConfirmError(true)
         :
            setConfirmError(false)
    }

    useEffect(()=>{
        const passwordInput = passwordRef.current;

    // Function to handle input event
    const handleInputChange = () => {
        const passwordValue = passwordInput.value;
        const passLength = passwordValue.length;
        passLength < 7 || passLength > 30
        ? setPasswordError(true)
        : setPasswordError(false)
    };

    // Add an event listener to capture changes in the input
    passwordInput.addEventListener('input', handleInputChange);

    // Clean up the event listener when component unmounts
    return () => {
        passwordInput.removeEventListener('input', handleInputChange);
    };
    },[passwordRef])

    return (
        <>
            <div className='signup-container'>
                <div className='form-container'>
                    <form>
                        <div className='signup-header'>
                            <h1>
                                Signup
                            </h1>
                        </div>

                        <div className="signup-name">
                            <label htmlFor="">Fullname</label>
                            <input 
                             type="text"
                             value={name} />
                        </div>

                        <div className="signup-email">
                            <label htmlFor="">Email</label>
                            <input 
                             type="email"
                             value={email} />
                        </div>

                        <div 
                         className={`
                         ${
                           passwordError 
                            ? 
                             'signup-password active' 
                            : 
                             'signup-password'
                         }
                       `}>
                            <label htmlFor="">Password</label>
                            <input 
                             ref={passwordRef}
                             type="password"
                            />
                            {
                                passwordError 
                                 ?
                                 <i>Password must have 8 - 30 characters</i>
                                 :
                                 <></>
                            }
                        </div>

                        <div 
                         className={`
                          ${
                            confirmError 
                             ? 
                              'signup-confirmation active' 
                             : 
                              'signup-confirmation'
                          }
                        `}>
                            <label htmlFor="">Confirm Password</label>
                            <input 
                             type="password"
                             ref={confirmRef}
                            />
                            {
                                confirmError
                                 ?
                                 <i>Password does not match</i>
                                 :
                                 <></>
                            }
                        </div>
                        <div className='signup-extras'>
                            <p>
                                Have an account? <Link to="/login">Sign-In</Link>
                            </p>
                        </div>
                        <div className='signup-button'>
                            <button>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Signup
