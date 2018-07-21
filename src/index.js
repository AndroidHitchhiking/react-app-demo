import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { productsReducers, cartsReducers, selectedProductsReducer } from './redux/reducer';

const allReducers = combineReducers(
    {
        products: productsReducers,
        carts: cartsReducers,
        selectedProduct: selectedProductsReducer
    }
);

//Store
const store = createStore(allReducers,
    {
        products: [],
        carts: [],
        selectedProduct: null
    },
    window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
