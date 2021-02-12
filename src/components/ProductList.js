import React from 'react';
import { FormattedNumber } from 'react-intl';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Channel } from '../services/emmit_service'

class ProductList extends React.Component {
    static defaultProps = {
        products: []
    }


    remove(product) {
        Channel.emit('product:remove', product.id);
    }

    render() {
        const { props } = this;
        return (
            <ul className="product-list">
                <TransitionGroup>
                    {
                        props.products.map(product => (
                            <CSSTransition key={product.id} timeout={300} classNames="product">
                                <li className="product-list-item" >
                                    <button onClick={this.remove.bind(this, product)}>X</button>
                                    <img src={product.image} alt={product.description} />
                                    <div>{product.description}</div>
                                    <div><FormattedNumber value={product.price} minimumFractionDigits={2} maximumFractionDigits={2}/></div>
                                </li>
                            </CSSTransition>

                        ))
                    }
                </TransitionGroup>


            </ul>
        )
    }
}

export default ProductList;