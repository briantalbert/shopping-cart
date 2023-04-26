import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Shop from "./Shop";

export default function RouteSwitch(props) {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage cartFull={props.cartFull}/>} />
                <Route path="/shop" element={<Shop cartFull={props.cartFull}/>} />
            </Routes>
        </HashRouter>
    )
}