import React, { Component } from 'react'
import Product from './../component/component_tutorial_redux/Product'
import {connect} from 'react-redux'
import {actAddToCart, actChangeMess} from './../actions/index'

class ProductsContainer extends Component {

    render() {
        return (
            <Product products = {this.props.products} addCart = {this.props.addProductCart} changeMessg = {this.props.changeMessenger}/>
        );
    }
}
const mapStateToProps = state => {
    return ({
        products: state.product
    });
};
const mapDispatchToProps = dispatch => {
    return ({
        addProductCart: (product) => {
            dispatch(actAddToCart(product,1));
        },
        changeMessenger : (mes) =>{
            dispatch(actChangeMess(mes));
        }
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);