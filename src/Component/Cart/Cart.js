import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}= props
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const shipping = 15;
    const tax = (total+shipping) * 0.10
    const grandTotal = total +shipping +tax;
    return (
        <div>
           <h3>Order Summary:</h3>
            <h5>Items Ordered:{props.cart.length}</h5> 
            <h4>Tax: ${tax}</h4>
            <h4>Total: ${total}</h4>
            <h5>Grand Total: {grandTotal}</h5>
        </div>
    );
};

export default Cart;