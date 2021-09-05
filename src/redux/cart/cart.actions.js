import CartActionTypes from './card.type';

export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};
