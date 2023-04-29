import React from "react";
import products from "./products"
import Product from "./Product";

export default function Shop(props) {
    const productCards = products.map(item => [
        <Product item={item} key={item.id}/>
    ])
    return(
        <div className="shop">
            <div className="cards">{productCards}</div>
        </div>
    )
}