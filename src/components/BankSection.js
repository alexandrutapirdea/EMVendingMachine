import React from 'react';
import Balance from './Balance';
import Banknotes from './Banknotes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BankSection = (
    (props) => {
        return (
            <section className="bank-section">
                <Balance/>
                <Banknotes banknotes={[1,2,5,10,20,50]}/>
            </section>
        );
    }
);

BankSection.propTypes = {
    balance: PropTypes.shape({
        value: PropTypes.number.isRequired
    })
};

const mapStateToProps = state => ({
    balance: state.balance
});

const mapDispatchToProps = () => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BankSection);