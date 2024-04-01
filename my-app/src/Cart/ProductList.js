import React, { Component } from 'react';
import ProductRow from './ProductRow';
import CartContext from './CartContext';
import { commerce } from '../lib/Commerce';
import products from '../data/items.json';

class ProductList extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     products: [products],
        // }

        this.handleAddProduct = this.handleAddProduct.bind(this);
    }

    handleAddProduct(productId) {
        this.context.addProductToCart(productId);
    }

    componentDidMount() {
        commerce.products.list().then((result) => {
            this.setState({ products: result.data });
        });
    }

    render() {
        return (
            <div className="container main-content">
                {
                    this.state.products.map(product => {
                        return <ProductRow key={product.id} product={product} addProduct={this.handleAddProduct} />
                    })
                }
            </div>
        );
    }
}

ProductList.contextType = CartContext;

export default ProductList;