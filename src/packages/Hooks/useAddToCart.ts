import { useContext, useCallback } from 'react';
import ICartItem from '@/types/cart';
import CartContext from '../Context/cartContext';

const useAddToCart = (isbn: string) => {
  const { cart, updateCart, isPresent } = useContext(CartContext);

  const addToCart = () => {
    const updatedCart: ICartItem = { ...cart };
    updatedCart[isbn] = 1;
    updateCart(updatedCart);
  };

  const increment = () => {
    const updatedCart: ICartItem = { ...cart };
    updatedCart[isbn] += 1;
    updateCart(updatedCart);
  };

  const decrement = () => {
    const updatedCart: ICartItem = { ...cart };
    updatedCart[isbn] -= 1;
    if (updatedCart[isbn] === 0) delete updatedCart[isbn];
    updateCart(updatedCart);
  };

  const remove = () => {
    const updatedCart: ICartItem = { ...cart };
    delete updatedCart[isbn];
    updateCart(updatedCart);
  };

  const retrieveQty = useCallback((): number => cart[isbn], [cart, isbn]);

  return {
    addToCart,
    isPresent,
    increment,
    decrement,
    retrieveQty,
    remove,
  };
};

export default useAddToCart;
