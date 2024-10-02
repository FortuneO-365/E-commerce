import React from 'react'
import fuchair from "../../Images/furniture/Alfa Monitor Stand.jpg"
import { Heart } from 'lucide-react'
import "./main.css"

function Product(props) {
    return (
        <>
            <div className="product-container">
                <div className="product-image">
                    <img src={fuchair} alt="" />
                </div>
                <div className="product-details">
                    <div className="product-name">
                        <h3>
                            {props.name}
                        </h3>
                    </div>
                    <div className="product-price">
                        <div className="price">
                            <p>
                                <span>
                                    {props.symbol} 
                                </span>
                                {props.price}
                            </p>
                        </div>
                        <div className="icon">
                            <Heart />
                        </div>
                    </div>
                </div>
                <div className="product-button">
                    <button>
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default Product
