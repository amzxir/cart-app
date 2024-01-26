import React, { useState } from "react";
import data from "../../data";
import "./product.css";
import ProductItem from "../ProductItem/productItem";

const Product = () => {

    const [card, setCard] = useState(data);

    return (
        <div className="product">
            {card.map((i) => {
                return (
                    <ProductItem key={i.id} {...i}/>
                )
            })}
        </div>
    )
}

export default Product;