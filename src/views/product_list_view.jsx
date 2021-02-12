import React from 'react';


import { ProductService } from '../services/product_services';
import { Channel } from '../services/emmit_service';
import ProductList from '../components/ProductList';
import { FormattedMessage } from 'react-intl';

class ProductListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }

        this.startData = this.startData.bind(this);
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.startData();
        Channel.on('product:remove', this.remove);
    }

    componentWillUnmount() {
        Channel.removeListener('product:remove', this.remove);
    }

    async startData() {
        const products = await ProductService.list();
    
        this.setState({ products });
    }

    async remove(productId) {
        const { products } = this.state,
            productIndex = products.findIndex(product => product.id === productId);

        await ProductService.remove(productId);
        products.splice(productIndex, 1);
        this.setState({ products });
    }

    render() {
        const { state } = this;
        return (
            <div>
                <h1><FormattedMessage defaultMessage="Product List" id="list.product"/></h1>
                <ProductList products={state.products} />
            </div>
        )
    }
}

export default ProductListView;