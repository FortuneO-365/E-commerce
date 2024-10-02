import React from 'react'
import { User2 , Package2 , Heart } from 'lucide-react'
import "./components.css"
import { useNavigate } from 'react-router-dom'

function AcctDropdown(props) {
    const navigate = useNavigate();
    const navigation = ()=>{
        navigate("/login")
    }
    return (
        <>
            <div className={`drop-container ${props.class}`} onClick={props.clickAction}>
                <div className="drop-items-container">
                    <div className="top-part">
                        <button onClick={navigation}>
                            Sign in
                        </button>
                    </div>
                    <hr/>
                    <div className="bottom-part">
                        <ul>
                            <li>
                                <div className="li-list-icon">
                                    <User2 />
                                </div>
                                <div className="list-item">My Account</div>
                            </li>
                            <li>
                                <div className="li-list-icon">
                                    <Package2 />
                                </div>
                                <div className="list-item">My Orders</div>
                            </li>
                            <li>
                                <div className="li-list-icon">
                                    <Heart />
                                </div>
                                <div className="list-item">My Wishlist</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcctDropdown
