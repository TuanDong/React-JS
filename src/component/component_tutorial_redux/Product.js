import React, { Component } from 'react'
import ProducItem from './ProductItem'


export default class Product extends Component {
    render() {
        var elemProduct = this.props.products.map((product,index) => {
            return <ProducItem key={index} product={product} addProductCart = {this.props.addCart} changeMessenger = {this.props.changeMessg}/>
        });
        return (
            <div>
                {elemProduct}
            </div>
        );
    }
}
