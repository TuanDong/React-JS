import React, { Component } from 'react'
import CartItem from './CartItem'
import CartResult from './CartResult'
import * as Message from './../../constants/Message'

export default class Cart extends Component {
    render() {
        var {listCart,changeNumber,changeMess} = this.props;
        var eleCart = Message.MSG_CART_EMPTY;
        
        if (listCart.length > 0) {
            eleCart = listCart.map((item,index) => {
                
                return(
                    <CartItem key = {index} cart = {item.product} quantity = {item.quantity} changeNumber = {changeNumber} changeMessenger={changeMess} removeCartItem = {this.props.removeCartItem}/>
                );
            });
            var total = 0;
            listCart.forEach((item, index) => {
                total += item.product.price * item.quantity;
            });
        }
        
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>Sản Phẩm</th>
                        <th style={{textAlign:"center"}}>Giá</th>
                        <th style={{textAlign:"center"}}>Số Lượng</th>
                        <th style={{textAlign:"center"}}>Tổng Cộng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {eleCart}
                    <CartResult total = {total}/>
                </tbody>
            </table>
        )
    }
}
