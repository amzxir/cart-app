import React from "react";
import Trash from "../../assets/svg/trash";
import "./product.css";

const Product = () => {
    return (
        <div className="product">
            <div className="card-product mb-3">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4">
                        <img className="img-fluid" src="/image/image 6.png" alt="" />
                        <input className="form-control shadow-none form-control-sm" type="number" />
                    </div>
                    <div className="col-md-8">
                        <p className="title-card">Margarita</p>
                        <p className="des-card">Large | Cheese , onion, and tomato pure</p>
                        <p className="price-card">$57</p>
                        <button className="btn btn-sm br-20"><Trash/></button>
                    </div>
                </div>
            </div>
            <div className="card-product mb-3">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4">
                        <img className="img-fluid" src="/image/image 6.png" alt="" />
                        <input className="form-control shadow-none form-control-sm" type="number" />
                    </div>
                    <div className="col-md-8">
                        <p className="title-card">Margarita</p>
                        <p className="des-card">Large | Cheese , onion, and tomato pure</p>
                        <p className="price-card">$57</p>
                        <button className="btn btn-sm br-20"><Trash/></button>
                    </div>
                </div>
            </div>
            <div className="card-product mb-3">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4">
                        <img className="img-fluid" src="/image/image 6.png" alt="" />
                        <input className="form-control shadow-none form-control-sm" type="number" />
                    </div>
                    <div className="col-md-8">
                        <p className="title-card">Margarita</p>
                        <p className="des-card">Large | Cheese , onion, and tomato pure</p>
                        <p className="price-card">$57</p>
                        <button className="btn btn-sm br-20"><Trash/></button>
                    </div>
                </div>
            </div>
            <div className="card-product mb-3">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4">
                        <img className="img-fluid" src="/image/image 6.png" alt="" />
                        <input className="form-control shadow-none form-control-sm" type="number" />
                    </div>
                    <div className="col-md-8">
                        <p className="title-card">Margarita</p>
                        <p className="des-card">Large | Cheese , onion, and tomato pure</p>
                        <p className="price-card">$57</p>
                        <button className="btn btn-sm br-20"><Trash/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;