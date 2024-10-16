import React ,  {useEffect, useState} from 'react'
import Product from './product'
import axios from 'axios';
function Main() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:9000/products" ,{withCredentials : true}) 
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
    }, []);
    return (
        <>
            <div className='flex-container'>
                {products.map((product, index)=>(
                    <div key={index} className='product-prop-container'>
                        <Product 
                        name={product.ProductName}
                        image={product.Image}
                        price = {product.Price}
                        symbol = "$"
                        />

                    </div>
                ))}
            </div>
        </>
    )
}

export default Main
