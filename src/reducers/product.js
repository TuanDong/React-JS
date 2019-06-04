var initialState = [
    {
        id:1,
        src:'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-black-400x460.png',
        name: 'Điện thoại Samsung Galaxy S10+',
        desc: 'Điện thoại do sam sung san xuất',
        price: 350,
        inventory:10
    },
    {
        id:2,
        src:'https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-white-400x460.png',
        name: 'Điện thoại iphone XS MAX 256 GB',
        desc: 'Điện thoại do apple san xuất',
        price: 450,
        inventory:5
    },
    {
        id:3,
        src:'https://cdn.tgdd.vn/Products/Images/42/199801/oppo-f11-mtp-400x460.png',
        name: 'Điện thoại OPPO F11 PRO XANH 128 GB',
        desc: 'Điện thoại do OPPO san xuất',
        price: 150,
        inventory:0
    }
]

const productReducer = (state = initialState,action) => {
    switch(action.type) {
        default : return [...state]
    }
}
export default productReducer;