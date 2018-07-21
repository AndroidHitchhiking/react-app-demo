import { ADD_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, SHOW_PRODUCT_DETAILS } from './actions';

export function productsReducers(productsListState = [], { type, payload }) {
    switch (type) {
        case ADD_PRODUCTS:
            return payload.productsData;
        default:
            return productsListState;
    }

}
export function cartsReducers(cartsState = [], { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            cartsState.push(payload.cartData);
            let newState = [...cartsState];
            return newState;
        case REMOVE_FROM_CART:
            cartsState.splice(payload.index, 1);
            let newCartState = [...cartsState];
            return newCartState;
        default:
            return cartsState;
    }
}
export function selectedProductsReducer(selectedProductState = {}, { type, payload }) {
    switch (type) {
        case SHOW_PRODUCT_DETAILS:
            let resultState = { isSelected: payload.isSelected, data: payload.data };
            return resultState;

        default:
            return selectedProductState;
    }

}