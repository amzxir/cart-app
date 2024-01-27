import React from "react";
import { useCartContext } from "../../context";
import "./bill.css";

const Bill = () => {

    const { clearCart , total } = useCartContext();

    return (
        <div className="bill">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 mb-3">
                        <p className="title-price">Total Bill</p>
                        <p className="bill-price mb-0">${total}</p>
                    </div>
                    <div className="col-md-5">
                        <a onClick={clearCart} className="btn btn-light w-100 br-20">Delete Order</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bill;