import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '../src/App';
import ProductContext from './Context/ProductContext';
import FilterContext from './Context/FilterContext';
import CartContext from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <ProductContext>
            <FilterContext>
                <CartContext>
                    <App />
                </CartContext>
            </FilterContext>
        </ProductContext>
    </BrowserRouter>
)