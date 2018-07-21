import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
    constructor(props){
    super(props);
    this.state = {};
    }
    render() {
        let product = this.props.products.map((item, i) => {
            return <Product key={item.id} productData={item} 
            addToCartProduct={this.props.addToCartItem}
            showProductDetailsData ={this.props.showProductDetails}/>
        });
        return (
            <div>
                <h3>Products</h3>  
                {product}             
            </div>
        );
    }
}

export default Products;