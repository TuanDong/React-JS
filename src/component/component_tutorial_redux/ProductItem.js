import React, { Component } from 'react'
import * as Mess from './../../constants/Message'

export default class ProducItem extends Component {
    addProductCart = (product) =>{
        this.props.addProductCart(product);
        this.props.changeMessenger(Mess.MSG_ADD_TO_CART_SUCCESS);
    }
    render() {
        var {src,name,desc,price,inventory} = this.props.product;
        var {product} = this.props;
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                
                <div className="thumbnail">
                    <span style={{position:"absolute",backgroundColor:"red",transform: "rotate(10deg)"}}><p>{inventory >0? 'Còn Hàng':'Hết Hàng'}</p></span>
                    <img src={src} alt="" />
                    <div className="caption">
                        <h3>{name}</h3>
                        <p>
                            {desc}
                        </p>
                        <hr></hr>
                        <p>
                            <span style={{ fontSize: 18, fontWeight: "bold", color: "red" }}> Giá: {price}$</span>
                            <button style={{ marginLeft: 220 }} className="btn btn-primary" onClick = {() => this.addProductCart(product)}>Mua Hàng</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}