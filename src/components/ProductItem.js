import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
const ProductListItem = (
    ({ product, balance, onProductClick}) => {
        console.log("props este",onProductClick);
        return(
        <Card className="product-item">
            <Image src={product.image} wrapped ui={false} />
            <div className="panel-heading">
                <span className="price">Price: <strong>${product.price}</strong></span>
                {
                    product.count <= 0 ?
                    <label className="out-of-stock">Out of stock</label> :
                    <span className="stock">Stock: <strong>{product.count}</strong></span>
                }

            </div>
            <Card.Content>
                <Card.Header>{product.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>Product code: 20 <br/></span>
                    <span className='date'>Expiration date: 28 March 2020</span>
                </Card.Meta>
                <Card.Description>
                    {
                        <Button primary onClick={() => onProductClick(product.id,product.price)} disabled={!((product.price <= balance.value) &&  product.count > 0)}>Buy it</Button>
                    }
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {
                            product.price <= balance.value ?
                                <label className="btn-sm text-warning">You have enough money</label> :
                                <label className="btn-sm text-warning">Load <strong>${product.price - balance.value}</strong> more</label>
                }
            </Card.Content>
        </Card>
    )
}
);

ProductListItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
    balance: PropTypes.shape({
        value: PropTypes.number.isRequired
    }),
    onProductClick: PropTypes.func.isRequired
};

export default ProductListItem;