import React from 'react';
import { connect } from 'react-redux';
import CartProduct from '../components/CartProduct';


const Cart = ({ cart }) => {
    return (
        <div>
            {cart.map((cart, i) => <h1 key={i}>{cart.name}{cart.count}</h1>)}
            <CartProduct />
        </div>
    );
};

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Cart);