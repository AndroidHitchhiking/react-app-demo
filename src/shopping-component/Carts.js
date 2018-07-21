import React, { Component } from 'react';
import CartItem from './CartItem';

class Carts extends Component {
    render() {
        console.log('this.props.cartsList', this.props.cartsList);
        let product;
        if (this.props.cartsList && this.props.cartsList.length > 0) {
            product = this.props.cartsList.map((item, i) => {
                return <CartItem position={i} key={item.id+i} cartData={item} removeItem={this.props.removeFromCart} />
            });
        } else {
            product = <div>Your cart is empty</div>;
        }
        return (
            <div>
                <h3>
                    <span>Cart</span>
                    <span> ({this.props.cartsList && this.props.cartsList.length > 0 ? this.props.cartsList.length : 0} items)</span>
                </h3>
                {product}
            </div>
        );
    }
}

export default Carts;