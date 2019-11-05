import React from 'react';
import { connect } from 'react-redux';
import CartProduct from '../components/CartProduct';


const Cart = ({ cart }) => {
    return (
        <div>
            {cart.map((product, i) => <CartProduct name={product.name} />) && <h1>Cart is empty</h1>}
        </div>
    );
};

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Cart);