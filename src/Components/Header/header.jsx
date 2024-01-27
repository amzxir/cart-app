import React from "react";
import "./header.css";
import ChevronLeft from "../../assets/svg/chevronLeft";
import ShoppingCard from "../../assets/svg/shoppingCart";
import { useCartContext } from "../../context";

const Header = () => {

    const { cart } = useCartContext();

    return (
        <header className="header">
            <div className="container d-flex justify-content-between">
                <span className="icon"><ChevronLeft /></span>
                <span className="name-header">card</span>
                <span class="icon">
                    <ShoppingCard />
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                    </span>
                </span>
            </div>
        </header>
    )
}

export default Header;