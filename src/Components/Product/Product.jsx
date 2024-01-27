import React, { useState } from "react";
import "./product.css";
import ProductItem from "../ProductItem/productItem";
import { useCartContext } from "../../context";

const Product = () => {

    const { cart } = useCartContext();

    const renderContent = () => {
        if (cart.length === 0) {
            return <p style={{ height:'550px' , marginTop:'20px' }}>cart is empty</p>
        }

        return (
            <div className="product">
                {cart.map((i) => {
                    return (
                        <ProductItem key={i.id} {...i} />
                    )
                })}
            </div>
        )
    }

    return (
        renderContent()
    )
}

export default Product;