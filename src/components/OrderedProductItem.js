import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react'
const OrderedProductItem = (
    (props) => {
        const {orderedProducts} = props;
        return(
            <div className="ordered-product-container">
                <div className="ordered-product-container">
                    <Image src={orderedProducts.image} className=" wrapped ui={false} ordered-product-image"/>
                </div>
            </div>
        );
    }
);

OrderedProductItem.propTypes = {
    orderedProducts: PropTypes.shape({
        image: PropTypes.string.isRequired
    }).isRequired
};

export default OrderedProductItem;