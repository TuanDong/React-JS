import React, { Component } from 'react'
import * as Mess from './../../constants/Message'

export default class CartItem extends Component {
    ChangeNumber(id,number){
        this.props.changeNumber(id,number);
        this.props.changeMessenger(Mess.MSG_UPDATE_CART_SUCCESS);
    }
    RemoveCartItem (id) {
        this.props.removeCartItem(id);
        this.props.changeMessenger(Mess.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    render() {
        var {cart,quantity} = this.props;
        return (
            <tr>
                <td style={{textAlign:"center"}}>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={{ height: 100, width: 100 }}>
                        <div className="thumbnail" >
                            <img src={cart.src}  alt={cart.name} />
                        </div>
                    </div>
                    <span>{cart.name}</span>
                </td>
                <td style={{textAlign:"center"}}>{cart.price}$</td>
                <td style={{textAlign:"center"}}>
                    <span>
                        <button type="button" className="btn btn-warning" onClick = {()=>this.ChangeNumber(cart.id,-1)}>-</button>
                    </span>
                    <span style={{padding:20}}>{quantity}</span>
                    <span>
                        <button type="button" className="btn btn-warning" onClick = {()=>this.ChangeNumber(cart.id,1)}>+</button>
                    </span>
                </td>
                <td style={{textAlign:"center"}}>{cart.price * quantity}$</td>
                <td style={{textAlign:"center"}}>
                    <button type="button" className="btn btn-default" onClick = {()=>this.RemoveCartItem(cart.id)}>Xóa</button>
                </td>
            </tr>
        )
    }
}