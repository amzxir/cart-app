import React from "react";
import Trash from "../../assets/svg/trash";

const ProductItem = ({title , des , price , quntity , img}) => {
    return (
        <div className="card-product mb-3">
            <div className="row d-flex align-items-center">
                <div className="col-md-4">
                    <img className="img-fluid" src="/image/image 6.png" alt="" />
                    <input className="form-control shadow-none form-control-sm" type="number" defaultValue={quntity} />
                </div>
                <div className="col-md-8">
                    <p className="title-card">{title}</p>
                    <p className="des-card">{des}</p>
                    <p className="price-card">${price}</p>
                    <button className="btn btn-sm br-20"><Trash /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;