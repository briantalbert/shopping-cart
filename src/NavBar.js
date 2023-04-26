import React from "react";
import cart from "./cart.png"

export default function NavBar(props) {
    return(
        <div className="navbar">
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#/shop">Shop</a></li>
            </ul>
            <div className="cart-div">
                {props.cartFull && <div className="full-cart-dot"></div>}
                <img
                    className="cart-image"
                    src={cart}
                />
            </div>
        </div>
    )
}