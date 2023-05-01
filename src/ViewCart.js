import React, {useEffect, useState} from "react";

export default function ViewCart(props) {
    const cart = props.cart;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(0);
        cart.forEach(item => {
            setTotal(prevTotal => prevTotal + (item.price * item.qty))
        });
    }, [cart])

    const cartElements = cart.map(item => [
        <div className="view-cart-item">
            <img 
                src={item.img}
                className="view-cart-img"
            />
            <span className="view-cart-prodname">{`${item.prod_name} x ${item.qty}`}</span>
            <span className="item-total-cost">{`$${(Math.round((item.price * item.qty) * 100) / 100).toFixed(2)}`}</span>
        </div>
    ])

    function checkOut() {
        console.log('checkout complete');
    }

    return (
        <div className="view-cart">
            {cart.length > 0 ? cartElements : <h3>no items in cart</h3>} <hr />
            <span className="final-total">${(Math.round(total * 100) / 100).toFixed(2)}</span>
            <button
                className="checkout-btn"
                onClick={checkOut}
            >Check Out</button>
        </div>
    )
}