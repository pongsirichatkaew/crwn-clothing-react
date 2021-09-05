import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

// const mapStateToProps = ({ cart: { cartItems } }) => {
//   return {
//     itemCount: cartItems.reduce(
//       (accumalatedQuantity, cartItem) =>
//         accumalatedQuantity + cartItem.quantity,
//       0
//     ),
//   };
// };

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => {
      dispatch(toggleCartHidden());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
