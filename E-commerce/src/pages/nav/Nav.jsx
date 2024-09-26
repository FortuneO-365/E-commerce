import React, { useState } from 'react'
import {Menu, List, ShoppingCart, Search, UserCircle2} from 'lucide-react'
import logo from "../../Images/Shopify-logo/cover.png"
import "./nav.css"

function Nav() {
    
    const [isSearching, setIsSearching] = useState(false);
    const [list, setList] = useState(false);

    const toggleSearching = ()=>{
        setIsSearching(!isSearching);
    }

    const toggleList = ()=>{
        setList(!list);
    }

    return (
        <>
            <div className="top-nav">
                <div className="left-part">
                    <div className="menu-icon mobile-only">
                        <Menu/>
                    </div>
                    <div className="hide-mobile signing">
                        <h4>Sign Up</h4>
                    </div>
                    <div className="hide-mobile signing">
                        <h4>Sign In</h4>
                    </div>
                    <div className="mobile-only account">
                        <UserCircle2/>
                    </div>
                </div>
                <div className="right-part">
                    <div className="shoping">
                        <ShoppingCart/>
                    </div>
                    <div className="currency">
                        <h4>Usd</h4> 
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

                    <div className="mid-nav">
                        <div className="searchbar-container">
                            <input type="search" name="" id="" placeholder='Search Shopify...' />
                            <button>Search</button>
                        </div>
                    </div>
                :

                    <></>
            }

            <div className='extended-bottom-nav'>
                <div className="bottom-nav">
                    <div className="logo">
                        <img src={logo} alt="company logo" />
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
        
        </>
    )
}

export default Nav
