import React, { Component } from 'react'

export default class CartResult extends Component {
    render() {
        return (
            <tr>
                <td></td>
                <td></td>
                <td><h3>Tổng Cộng</h3></td>
                <td><h3>{this.props.total}$</h3></td>
                <td></td>
            </tr>
        )
    }
}