import React from "react";
import NavBar from "./NavBar";

export default function Shop(props) {
    return(
        <div className="shop">
            <NavBar cartFull={props.cartFull}/>
        </div>
    )
}