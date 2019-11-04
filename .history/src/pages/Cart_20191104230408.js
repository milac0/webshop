import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ cart }) => {

    return (
        <div>
            cart.map(cart => <h1>{cart.name}</h1>)
        </div>
    );
};

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Cart);