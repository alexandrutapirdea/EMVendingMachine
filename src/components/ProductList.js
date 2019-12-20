import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../components/ProductItem';
import { connect } from 'react-redux';
import {buyProduct, decrementBalance} from '../actions/Actions';

const ProductList = (
    ({ products, onProductClick, balance}) => (
        <section className="ui column grid">
            {  console.log("products este 2222",products)}
            {
                products.loading ?
                    'Loading products...' :
                    products.data.map(product => (
                        <div key={product.id} >
                            <ProductItem product={product} balance={balance} onProductClick={onProductClick} className="column"/>
                        </div>
                    ))
            }
        </section>
    )
);

ProductList.propTypes = {
    products: PropTypes.shape({
        data: PropTypes.array.isRequired
    }).isRequired,
    balance: PropTypes.object.isRequired,
    onProductClick: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
    products: state.products,
    balance: state.balance
});


const mapDispatchToProps = dispatch => ({
    onProductClick: (id,ammount) => {
        dispatch(buyProduct(id));
        dispatch(decrementBalance(ammount));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
