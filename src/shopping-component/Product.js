import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.productDetails = this.productDetails.bind(this);
    }

    addToCart() {
        this.props.addToCartProduct(this.props.productData);
    }

    productDetails() {
        this.props.showProductDetailsData(true, this.props.productData);
    }
    render() {
        return (
            <div className="product-lists">
                <div className="my-list">
                    <div>
                        <span>
                            <img src={this.props.productData.image} alt="" />
                        </span>
                        <span>
                            <h4>{this.props.productData.name}</h4>
                            <div>${this.props.productData.price}</div>
                            <div className="button-div">
                                <span>
                                    <Link to="/"><button type="button" className="button add-to-cart-button" onClick={this.addToCart}>Add To Cart</button></Link>
                                </span>
                                <span >
                                    <Link to={'/details/'+this.props.productData.id}><button type="button" className="button details-button" onClick={this.productDetails}>Details</button></Link>
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className="offer">Extra 5% Off. Cart value $ {0.5 * this.props.productData.price}</div>
                </div>
            </div>
        );
    }
}

export default Product;