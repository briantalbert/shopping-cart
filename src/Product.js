import React, { useState } from "react";

export default function Product(props) {
    const item = props.item;
    const [count, setCount] = useState(0);
    const setCart = props.setCart;

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
        setCart(prevCart => [
            ...prevCart,
            {
                id: item.id,
                prod_name: item.prod_name,
                qty: count
            }
        ])
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