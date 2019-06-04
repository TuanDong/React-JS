import React, { Component } from 'react'
import ProductsContainer from './../../containers/ProductsContainer'
import MessengerContainer from './../../containers/MessengerContainer'
import CartContainer from './../../containers/CartContainer'
import appReducer from './../../reducers/index';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default class ShopingCart extends Component {
    render() {
        return (
            <Provider store={store}>
                <div> 
                    <div className="container">
                        <h1 style={{ textAlign: "center", marginBottom:50}}>Danh Sách Sản Phẩm</h1>

                        <ProductsContainer />
                        
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <MessengerContainer />
                                <div style = {{paddingTop:50}}>
                                    <CartContainer />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Provider>
        );
    }
}