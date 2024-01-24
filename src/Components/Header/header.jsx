import React from "react";
import "./header.css";
import ChevronLeft from "../../assets/svg/chevronLeft";
import ShoppingCard from "../../assets/svg/shoppingCart";

const Header = () => {
    return (
        <header className="header">
            <div className="container d-flex justify-content-between">
                <span className="icon"><ChevronLeft /></span>
                <span className="name-header">card</span>
                <span className="icon"><ShoppingCard /></span>
            </div>
        </header>
    )
}

export default Header;