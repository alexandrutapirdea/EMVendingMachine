import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


// displays the current amount of money
const Balance = (
    ({ balance }) => (
        <section className="panel panel-default">
            <div className="panel-heading">
                Balance
            </div>
            <div className="panel-body text-center">
                <span className="balance">${balance.value}</span>
            </div>
        </section>
    )
);

Balance.propTypes = {
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
)(Balance);