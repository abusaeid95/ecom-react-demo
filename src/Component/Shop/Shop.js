import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const handleAdtoCart = (product) =>{
            const newcart = [...cart, product]
            setCart(newcart)
    }
    return (
        <div>
            <div className='shop-container'>
                <div className="product-container">
                    <h3>Products:{products.length}</h3>
                    {
                        products.map(product =><Product 
                            key={product.key}
                            product={product}
                            handleAdtoCart={handleAdtoCart}>
                            </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;