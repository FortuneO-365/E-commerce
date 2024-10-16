import React, { useEffect, useRef, useState } from 'react'
import {Menu, List, ShoppingCart, Search, UserCircle2} from 'lucide-react'
import logo from "/Images/Shopify-logo/cover.png"
import Sidebar from '../dashboard/Sidebar';
import { Link , Outlet, useLocation } from 'react-router-dom';
import "./nav.css"
import AcctDropdown from '../../components/AcctDropdown';
import axios from 'axios';
import Languages from '../../components/languages';

function Nav(props) {
    const location = useLocation();

    const [user , setUser] = useState(location.state?.user);
    const [isUser, setIsUser] = useState(false);
    
    const [isSearching, setIsSearching] = useState(false);
    const [dashboard , setDashboard] = useState(false)
    const [account , showAccount] = useState(false)
    const [list, setList] = useState(false);
    const [currency, showCurrency] = useState(false)

    const buttonRef = useRef(null);
    const secButtonRef = useRef(null);


    const addDashboard = () => {
        setDashboard(true);
    }

    const removeDashboard = (e) => {
        setDashboard(false);
    }

    const toggleSearching = ()=>{
        setIsSearching(!isSearching);
    }

    const toggleList = ()=>{
        setList(!list);
    }

    const addAccount = () => {
        showAccount(true)
    }

    const removeAccount = () => {
        showAccount(false)
    }

    useEffect(()=>{
        axios.get("http://localhost:9000/api/auth/status" ,{withCredentials : true}) 
        .then(res => {
            setUser(res.data)
            setIsUser(true)
            // console.log(user)
        })
        .catch(err => {
            setIsUser(false)
        })
    }, [user]);

    return (
        <>
            <div className="top-nav">
                <div className="left-part">
                    <div ref={buttonRef} className="menu-icon mobile-only"  onClick={addDashboard}>
                        <Menu ref={secButtonRef}/>
                    </div>
                    {
                        dashboard ?
                            <Sidebar 
                             cancel = {removeDashboard}
                             username = {isUser ? user.FirstName : "User"}
                            />
                        :
                            <></>
                    }
                    <div className="hide-mobile signing">
                        <h4>Sign Up</h4>
                    </div>
                    <div className="hide-mobile signing">
                        <Link to="/login">
                            <h4>Sign In</h4>
                        </Link>
                    </div>
                    <div 
                     className="mobile-only account" 
                     onMouseOver={addAccount} 
                     onMouseOut={removeAccount}
                    >
                            <UserCircle2/>
                        {
                            account ?
                                <AcctDropdown 
                                 class="active"
                                 clickAction = {removeAccount}
                                 button = {isUser ? "Log Out" : "Sign In"}
                                />
                            :
                                <>
                                </>
                        }
                    </div>
                </div>
                <div className="right-part">
                    <div className="shoping">
                        <ShoppingCart/>
                    </div>
                    <div className="currency">
                        <div className='currency-image'>
                            <img src="/Images/flags/us-flag.gif" alt="country-flag" />
                        </div>
                        <h4>Usd</h4> 
                        {
                            showCurrency 
                            ? <></>
                            : <Languages/>
                        }
                    </div>
                    <div 
                     className="search-icon"
                     onClick={toggleSearching}>
                        <Search color={isSearching? "#d8d961": "white"}/>
                    </div>
                </div>
            </div>

            {
                isSearching ?

                    <div className="mid-nav" onClick={removeDashboard}>
                        <div className="searchbar-container">
                            <input type="search" name="" id="" placeholder='Search Shopify...' />
                            <button>Search</button>
                        </div>
                    </div>
                :

                    <></>
            }

            <div className='extended-bottom-nav' onClick={removeDashboard}>
                <div className="bottom-nav">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="company logo" />
                        </Link>
                    </div>
                    <div className="hide-mobile product">
                        <h2>
                            Mens Clothing
                        </h2>
                    </div>
                    <div className="hide-mobile product">
                        <h2>
                            Womens Clothing
                        </h2>
                    </div>
                    <div className="hide-mobile product">
                        <h2>
                            Furniture
                        </h2>
                    </div>
                    <div className="hide-mobile product">
                        <h2>
                            Gadgets
                        </h2>
                    </div>
                    <div className="hide-mobile product">
                        <h2>
                            Electronics
                        </h2>
                    </div>
                    <div 
                     className="list-icon mobile-only"
                     onClick={toggleList}>
                        <div>
                            <List/>
                        </div>
                    </div>
                </div>

                {
                    list ?

                        <div className="bottom-nav-extension mobile-only">
                            <div className="">
                                <h3>Mens Clothing</h3>
                            </div>
                            <hr/>
                            <div className="">
                                <h3>Womens Clothing</h3>
                            </div>
                            <hr/>
                            <div className="">
                                <h3>Furniture</h3>
                            </div>
                            <hr/>
                            <div className="">
                                <h3>Gadgets</h3>
                            </div>
                            <hr/>
                            <div className="">
                                <h3>Electronics</h3>
                            </div>
                        </div>
                    :
                        <></>
                }
                
            </div>
        <Outlet />
        </>
    )
}

export default Nav
