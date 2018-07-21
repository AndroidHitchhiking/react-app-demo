import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addProducts, addToCart, removeFromCart, showSelectedProductsDetails } from './redux/actions';
import { addInitialList } from './utils/add-products';
import Products from './shopping-component/Products';
import Carts from './shopping-component/Carts';
import ProductDetails from './shopping-component/ProductDetails';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.showProductDetails = this.showProductDetails.bind(this);

  }

  componentDidMount() {
    this.props.onAddProducts(addInitialList());
  }

  addToCart(product) {
    this.props.onAddToCart(product);
  }
  showProductDetails(isSelected, product) {
    this.props.onShowProductDetails(isSelected, product);
    this.forceUpdate();
  }
  removeItemFromCart(index) {
    this.props.onRemoveFromCart(index);
  }

  render() {
    let cartOrDetails = <Carts cartsList={this.props.cartsList} removeFromCart={this.removeItemFromCart} />
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <Router>
          <Switch>
            <Route exact strict path='/' render={() => (
              <div className="row">
                <div className="column">
                  <Products products={this.props.productsList} addToCartItem={this.addToCart}
                    showProductDetails={this.showProductDetails} />
                </div>
                <div className="column">
                  {cartOrDetails}
                </div>
              </div>
            )} />
            {/* <Route exact path={'/details/:id'} render={() =>(
              <ProductDetails data={this.props.selectedItem}></ProductDetails>
            )}  /> */}

            {this.props.slectedProduct && this.props.slectedProduct.isSelected && <Route exact path={'/details/:id'} render={() => (
              <ProductDetails data={this.props.selectedItem}></ProductDetails>
            )} />}

            {/* {this.props.productsList} */}
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productsList: state.products,
  cartsList: state.carts,
  selectedItem: state.seletecProducts
});
const mapActionToProps = {
  onAddProducts: addProducts,
  onAddToCart: addToCart,
  onRemoveFromCart: removeFromCart,
  onShowProductDetails: showSelectedProductsDetails
}

export default connect(mapStateToProps, mapActionToProps)(App);
