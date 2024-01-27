import React from "react";
import Trash from "../../assets/svg/trash";
import { useCartContext } from "../../context";

const ProductItem = ({title , des , price , quntity , img , id}) => {

    const { removeOrder , changeQuantity } = useCartContext();

    return (
        <div className="card-product mb-3">
            <div className="row d-flex align-items-center">
                <div className="col-md-4">
                    <img className="img-fluid" src="/image/image 6.png" alt="" />
                    <input className="form-control shadow-none form-control-sm" type="number" onChange={(e) => changeQuantity({ id:id , quntity:+e.target.value })} value={quntity} />
                </div>
                <div className="col-md-8">
                    <p className="title-card">{title}</p>
                    <p className="des-card">{des}</p>
                    <p className="price-card">${price}</p>
                    <a onClick={() => removeOrder(id)} className="btn btn-sm br-20"><Trash /></a>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;