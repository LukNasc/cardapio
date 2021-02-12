import React from 'react';
import { ProductService } from '../services/product_services';

import { FormattedMessage } from 'react-intl';

class RegisterProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            description: '',
            price: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { target } = e,
            { name, value } = target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const product = this.state;
        if (product.description && product.price) {
            ProductService.create(product);
            this.setState({
                image: '',
                description: '',
                price: 0
            })
        }
    }

    render() {
        const { state } = this;
        return (
            <div>
                <h1>
                    <FormattedMessage defaultMessage="New Product" id="product.new.title"/>
                </h1>
                <form className="product-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="image">
                        <span><FormattedMessage defaultMessage="Image" id="product.new.image"/></span>
                        <input type="text" name="image" value={state.image} onChange={this.handleChange} />
                    </label>
                    <label htmlFor="description">
                        <span><FormattedMessage defaultMessage="Description" id="product.new.description"/></span>
                        <input type="text" name="description" value={state.description} onChange={this.handleChange} />
                    </label>
                    <label htmlFor="price">
                        <span><FormattedMessage defaultMessage="price" id="product.new.price"/></span>
                        <input type="text" name="price" value={state.price} onChange={this.handleChange} />
                    </label>
                    <button type="submit"><FormattedMessage defaultMessage="Create Product" id="product.create.product"/></button>
                </form>
            </div>
        )
    }
}

export default RegisterProductView;