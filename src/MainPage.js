import React from "react";
import Watermark from "./Watermark";
export default function MainPage(props) {
    
    return (
        <div className="main-page">
            <span className="main-title">QUALITY QUANNABIS QUEDIBLES</span><br />
            <p className="main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.</p><br />
            <div className="highlights">
                <span className="highlight-title">all CLOUDTREAT edibles are:</span>
                <ul>
                    <li>homemade to order</li>
                    <li>made with lab-tested cannabis</li>
                    <li>made with refined coconut oil, rather than butter</li>
                    <li>able to be made vegan by request</li>
                    <li>meticulously weighed and measured for accurate, consistent dosing</li>
                    <li>made by default without chocolate chips, for higher consistency and accuracy in dosing</li>
                </ul>
            </div><br />
            <span className="browse-shop">browse our <a href="/#/shop">shop</a> to check out available products!</span>
            <Watermark />
            
            <span className="disclaimer">this page was made as a learning excercise only. no 
            illegal substances are actually for sale. if you really want i will sell you 
            some chocolate chips, but no cannabis infused edibles of any kind are available 
            for sale. the checkout button doesn't even work.</span>
        </div>
    )
}