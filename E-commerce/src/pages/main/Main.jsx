import React ,  {useEffect, useState} from 'react'
import Product from './product'
function Main() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:9000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log(err))

        console.log("Fetching products...");
    }, []);

    useEffect(() => {
      console.log(products);
    }, [products]);
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
