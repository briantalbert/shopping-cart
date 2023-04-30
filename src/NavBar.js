import React, { useState } from "react";
import cart_img from "./cart.png"
import leaf from "./cannabis.png"
import ViewCart from "./ViewCart";
import products from "./products";

export default function NavBar(props) {
    const cart = props.cart;
    const [cartVisible, setCartVisible] = useState(false);

    function showCart() {
        setCartVisible(prevCart => !prevCart)
    }

    return(
        <div className="navbar">
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#/shop">Shop</a></li>
            </ul>
            <div className="logo">
                <img src={leaf} className="logo-img" />
                <span className="business-name">CLOUDTREATS</span>
                <span className="subtext">central virginia edibles</span>
            </div>
            <div className="cart-div" onClick={showCart}>
                {props.cartFull && <div className="full-cart-dot"></div>}
                <img
                    className="cart-image"
                    src={cart_img}
                />
            </div>
            {cartVisible && <ViewCart cart={cart} />}
        </div>
    )
}