import { combineReducers } from 'redux'
import product from './product'
import cart from './cart'
import messenger from './messenger'

const appReducers = combineReducers ({
    product,
    cart,
    messenger
});
export default appReducers;