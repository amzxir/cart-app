import React, { useState } from "react";
import "./product.css";
import ProductItem from "../ProductItem/productItem";
import { useCartContext } from "../../context";

const Product = () => {

    const { cart } = useCartContext();

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

export default Product;