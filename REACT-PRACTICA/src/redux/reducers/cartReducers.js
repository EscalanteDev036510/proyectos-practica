const INIT_STATE = {
    cart: []
}

export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'PUSH NEW PRODUCT':
            //VALIDAR STOCK, OFERTA O CUPON (TANTAS ACCIONES COMO QUIERAN)
            if (action.payload){
                console.log('Existe');
            }
            return {
                ...state,
                cart:[...state.cart, action.payload]
            }
        default:
            return state;
    }
}