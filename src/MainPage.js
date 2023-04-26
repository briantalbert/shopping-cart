import React from "react";
import NavBar from "./NavBar";

export default function MainPage(props) {
    
    return (
        <div className="main-page">
            <NavBar cartFull={props.cartFull}/>
        </div>
    )
}