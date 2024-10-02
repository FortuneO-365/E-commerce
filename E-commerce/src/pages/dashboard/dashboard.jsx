import 
{   UserCircle, 
    ListCheck, 
    ShoppingCart, 
    Heart, 
    CreditCard,
    Wallet,
    Globe,
    UserRoundSearchIcon
} 
from 'lucide-react'
import React, { useState } from 'react'
import "./dashboard.css"

function Dashboard() {
    const [user , setUser] = useState("User")

    return (
        <>
            <div className="dashboard-container">
                <div className="top-section">
                    <div className="username">
                        <div className='user-icon'>
                            {
                                user == "User" ?
                                <UserCircle/>
                                :
                                <></>
                            }
                        </div>
                        <h2>
                            Hey, {user}
                        </h2>
                    </div>
                </div>
                <div className="category">
                    <div className="category-header">
                        <h3>Orders</h3>
                    </div>
                    <div className="category-body">
                        <ul>
                            <li>My Orders</li>
                            <li>My Cart</li>
                            <li>My Wishlist</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="category">
                    <div className='category-header'>
                        <h3>
                            Help & Settings
                        </h3>
                    </div>
                    <div className='category-body'>
                        <ul>
                            <li>My Account</li>
                            <li>Language</li>
                            <li>Country</li>
                            <li>Customer Service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
