import { createContext, useState, useEffect, FC, useCallback } from 'react';
import ICartItem from '@/types/cart';
import useStorage from '@/packages/Hooks/useStorage';

interface ICartContext {
  cart: ICartItem;
  updateCart: (arg0: ICartItem) => void;
  isPresent: (isbn: string) => boolean;
  cartSize: () => number;
}

const CartContext = createContext({} as ICartContext);

export const CartProvider: FC = ({ children }) => {
  const [cart, setCart] = useState({} as ICartItem);
  const { getItem, setItem } = useStorage();

  useEffect(() => {
    const sessionCart: undefined | string = getItem(`cart`, `sessionStorage`);

    if (!sessionCart) setItem(`cart`, JSON.stringify(cart), `sessionStorage`);
    else setCart(JSON.parse(sessionCart));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setItem(`cart`, JSON.stringify(cart), `sessionStorage`);
  }, [cart, setItem]);

  const updateCart = (newCart: ICartItem) => {
    setCart(newCart);
  };

  const isPresent = useCallback((isbn: string) => isbn in cart, [cart]);

  const cartSize = useCallback(() => Object.keys(cart).length, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCart,
        isPresent,
        cartSize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
