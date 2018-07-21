import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        console.log("this.props",this.props);
        this.closeDetails = this.closeDetails.bind(this);
        this.addToCartFromDetails = this.addToCartFromDetails.bind(this);
    }
    closeDetails() {
        {/* <Redirect to="/"></Redirect> */}
    }
    addToCartFromDetails() {
        this.props.onAddToCart(this.props.selectedItem);
    }
    render() {
        return (
            <div>
                <h3>{this.props.selectedItem.name}</h3>
                <a className="close-detail" onClick={this.closeDetails}>Cart</a>
                <div className="details-parent">
                    <img src={this.props.selectedItem.image} alt="" />
                    <h3>NAME: {this.props.selectedItem.name}</h3>
                    <h3>PRICE: ${this.props.selectedItem.price}</h3>
                    <h3>
                        <button type="button" className="button add-to-cart-button" onClick={this.addToCartFromDetails}>Add To Cart</button>
                    </h3>
                </div >
                
            </div >
        );
    }
}


const mapStateToProps = state => ({
    cartsList: state.carts,
    selectedItem: state.seletecProducts
});
const mapActionToProps = {
    onAddToCart: addToCart
}

export default connect(mapStateToProps, mapActionToProps)(ProductDetails);
