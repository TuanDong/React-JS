import * as Types from './../constants/ActionType'

export const actAddToCart = (product, quantity) => {
    return { 
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangeMess = (messenger) => {
    return {
        type: Types.CHANGE_MESSENGER,
        messenger
    }
}
export const actChangeNumber = (id,number) => {
    return {
        type: Types.CHANGE_NUMBER,
        number,
        id
    }
}
export const actDeleteCartItem = (id) => {
    return {
        type: Types.REMOVE_CART_ITEM,
        id
    }
}