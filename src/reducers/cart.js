import * as Types from './../constants/ActionType'
var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];

const cart = (state = initialState,action) => {
    var products = [...state];
    switch(action.type) {
        case Types.ADD_TO_CART:
            var findIndex = -1;
            findIndex = FindIndex(products,action.product.id);
            if (findIndex < 0) {
                products.push({product:action.product,quantity:action.quantity});
            } else {
                products[findIndex].quantity += action.quantity;
            }
            localStorage.setItem("CART", JSON.stringify(products));
            return products;
        case Types.CHANGE_NUMBER:
            let index = -1;
            index = FindIndex(products,action.id);
            if (index >= 0) {
                products[index].quantity += action.number;
                if (products[index].quantity <=0 ) {
                    products.splice(index,1);
                }
                localStorage.setItem("CART", JSON.stringify(products));
            }
            if (products.length <= 0) {
                localStorage.removeItem("CART");
            }
            return products;
        case Types.REMOVE_CART_ITEM:
            var indexItem = -1;
            indexItem = FindIndex(products,action.id);
            products.splice(indexItem,1);
            localStorage.setItem("CART", JSON.stringify(products));
            return products;
        default : return [...state];
    }
}
var FindIndex = (products,id) => {
    var findIndex = -1;
    products.forEach((productCart,index)=>{
        if(productCart.product.id === id){
            findIndex = index;
        } 
    });
    return findIndex;
}

export default cart;