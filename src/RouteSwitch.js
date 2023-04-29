import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Shop from "./Shop";

export default function RouteSwitch(props) {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/shop" element={<Shop setCart={props.setCart}/>} />
            </Routes>
        </HashRouter>
    )
}