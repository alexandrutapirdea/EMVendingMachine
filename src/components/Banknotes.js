import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { incrementBalance } from '../actions/Actions';


const Banknotes = (
    ({ banknotes, onBanknoteClick }) => (
        <section className="panel panel-primary">
            <div className="panel-heading">
                Load banknote
            </div>
            <div className=" custom-button">
                <section className="custom-button ">
                    {banknotes.map(banknote => (
                        <div key={banknote} className="column" style={{ marginBottom: '.5em'}}>
                            <Button className="primary " onClick={() => onBanknoteClick(banknote)}>${banknote}</Button>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
);

Banknotes.propTypes = {
    banknotes: PropTypes.arrayOf(PropTypes.number).isRequired,
    onBanknoteClick: PropTypes.func.isRequired
};


const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
    onBanknoteClick: amount =>  dispatch(incrementBalance(amount))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Banknotes);