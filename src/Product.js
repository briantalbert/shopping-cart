import React, { useState } from "react";

export default function Product(props) {
    const item = props.item;
    const setCart = props.setCart;
    const cart = props.cart;
    const [inCart, setInCart] = useState(false);
    const [count, setCount] = useState(0);
    


    function handleClick(e) {
        e.preventDefault();
        if (e.target.value == -1) {
            setCount(prevCount => prevCount - 1 < 0 ? 0 : prevCount - 1);
        } else {
            setCount(prevCount => prevCount + 1);
        }
    }

    function addToCart(e) {
        e.preventDefault();

        if (inCart) {
            //if in the cart, remove it. next steps will update count,
            //or just replace it if count is the same.
            cart.splice(cart.findIndex(x => x.id == item.id), 1);
        }

        const cartItem = {
            ...item,
            qty: count
        }

        setCart(prevCart => [
            ...prevCart,
            cartItem
        ])
        setInCart(true);
    }

    return (
        <div className="product-card">
            <img src={item.img} alt={item.prod_name} className="item-img" />
            <span className="prodname">{item.prod_name}</span>
            <span className="potency">{item.thc_total}</span>
            <span className="price">{`$${item.price}`}</span>
            <div className="picker">
                <button 
                    className="minus-button" 
                    onClick={handleClick}
                    value={-1}
                >-</button>
                <input 
                    type="number"
                    className="item-qty"
                    onChange={e => setCount(e.target.value)}
                    value={count}
                />
                <button 
                    className="plus-button" 
                    onClick={handleClick}
                    value={1}
                >+</button>
            </div>
            <button
                className="add-cart-button"
                onClick={addToCart}
            >Add To Cart</button>
        </div>
    )
}