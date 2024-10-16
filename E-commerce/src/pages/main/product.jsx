import React, { useState } from 'react'
// import fuchair from "../../Images/furniture/Alfa Monitor Stand.jpg"
import { Heart} from 'lucide-react'
import { FaHeart } from "react-icons/fa";
import "./main.css"

function Product(props) {

    const [liked, showliked] = useState(false)
    const setLiked = () => {
        showliked(!liked)
    }

    return (
        <>
            <div className="product-container">
                <div className="product-image">
                    <img src={props.image} alt="" />
                </div>
                <div className="product-details">
                    <div className="product-name">
                        <h4>
                            {props.name}
                        </h4>
                    </div>
                    <div className="product-price">
                        <div className="price">
                            <h3>
                                <span>
                                    {props.symbol} 
                                </span>
                                {props.price}
                            </h3>
                        </div>
                        <div className="icon" onClick={setLiked}>
                            {
                                liked 
                                ?
                                <FaHeart className='color'/>
                                :
                                <Heart/>  

                            }
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
