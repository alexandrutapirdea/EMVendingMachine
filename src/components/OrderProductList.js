import React from 'react';
import PropTypes from 'prop-types';
import OrderedProductItem from '../components/OrderedProductItem';
import {connect} from "react-redux";


const OrderProductList = (
    ( props ) => {
        let {orderedProducts} = props.products;
        console.log("OPL",orderedProducts);
        return (
            <section className="ordered-products-list">
                <h1>Lista cu produse cumparate:  </h1>
                {
                    orderedProducts !== undefined && orderedProducts.length === 0 ?
                        <span className="red-bold-message">Nu ai cumparat inca niciun produs</span> :
                    orderedProducts.map(product => (
                        <div key={product.id} className="col-xs-12 text-center">
                            <OrderedProductItem orderedProducts={product}/>
                        </div>
                    ))
                }
            </section>
        )
    }
);

OrderProductList.propTypes = {
    orderedProducts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired)
};



const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderProductList);
