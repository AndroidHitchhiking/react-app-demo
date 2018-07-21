import React, { Component } from 'react';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    removeFromCart(){
        this.props.removeItem(this.props.position);
    }

    render() {
        return (
            <div className="cart-parent">
                <div className="cart-item">
                    <span>
                        <img src={this.props.cartData.image} alt="" />
                    </span>
                    <span className="item-text">
                        <h4>{this.props.cartData.name}</h4>
                        <div>${this.props.cartData.price}</div>
                        <button type="button" className="button remove-from-cart-button" onClick={this.removeFromCart} >Remove</button>
                    </span>
                    <div className="clear"></div>
                </div >
            </div >
        );
    }
}

export default CartItem;