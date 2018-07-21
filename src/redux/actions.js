export const ADD_PRODUCTS = "products:addProducts";
export const ADD_TO_CART = "carts:addToCart";
export const REMOVE_FROM_CART = "carts:removeFromCart";
export const SHOW_PRODUCT_DETAILS = "details:showProductDetails";

export function addProducts(products) {
    return {
        type:ADD_PRODUCTS,
        payload:{
            productsData : products
        }
    }
}

export function addToCart(product) {
    return {
        type:ADD_TO_CART,
        payload:{
            cartData : product
        }
    }
}
export function removeFromCart(position) {
    return {
        type:REMOVE_FROM_CART,
        payload:{
            index : position
        }
    }
}
export function showSelectedProductsDetails(isSelected,product) {
    return {
        type:SHOW_PRODUCT_DETAILS,
        payload:{
            isSelected : isSelected,
            data:product
        }
    }
}