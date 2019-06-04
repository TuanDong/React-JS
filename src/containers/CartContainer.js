import React, { Component } from 'react'
import {connect} from 'react-redux'
import Cart from './../component/component_tutorial_redux/Cart'
import * as Message from './../constants/Message'
import {actChangeNumber,actChangeMess,actDeleteCartItem} from './../actions/index'

class CartContainer extends Component {

    render() {
        
  
        return (
            this.ShowCart()
        );
    }
    ShowCart = () => {
        if(this.props.cart.length > 0) {
            return (<Cart listCart = {this.props.cart} changeNumber = {this.props.changeNumber} changeMess = {this.props.changeMessenger} removeCartItem = {this.props.removeCartItem}/>);
        }
        return Message.MSG_CART_EMPTY;
    }
}
const MapStateToProps = state => {
    return ({
        cart : state.cart
    });
}
const MapDispatchToProps = dispatch => {
    return ({
        changeNumber: (id,number) =>{
            dispatch(actChangeNumber(id,number));
        },
        changeMessenger: (mes) => {
            dispatch(actChangeMess(mes));
        },
        removeCartItem: (id) => {
            dispatch(actDeleteCartItem(id));
        }
    });
}

export default connect(MapStateToProps, MapDispatchToProps)(CartContainer);