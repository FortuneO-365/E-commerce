import React from 'react'
import {Menu, List, ShoppingCart, Search} from 'lucide-react'
import logo from "../../Images/Shopify-logo/cover.png"

function Nav() {
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
                </div>
                <div className="right-part">
                    <div className="shoping">
                        <ShoppingCart/>
                    </div>
                    <div className="currency">
                        <h4>Usd</h4> 
                    </div>
                    <div className="search-icon">
                        <Search/>
                    </div>
                </div>
            </div>

            <div className="mid-nav">
                <div className="searchbar-container">
                    <input type="search" name="" id="" placeholder='Search Shopify...' />
                    <button>Search</button>
                </div>
            </div>

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
                <div className="mobile-only list-icon">
                    <div>
                        <List/>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Nav
