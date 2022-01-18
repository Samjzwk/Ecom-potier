/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CartContext from '@/packages/Context/cartContext';
import MiniCart from '../MiniCart';

const renderWithContext = (component: any, propsProvider: {}) => ({
  ...render(
    <CartContext.Provider value={propsProvider}>
      {component}
    </CartContext.Provider>,
  ),
});

afterEach(cleanup);

it(`checks if initial state is equal to 0`, () => {
  const propsProvider = { cartSize: () => 0 };

  const { getByText } = renderWithContext(<MiniCart />, propsProvider);
  expect(getByText(`0`)).toBeInTheDocument();
});

it(`checks if initial state is equal to 1`, () => {
  const propsProvider = { cartSize: () => 1 };

  const { getByText } = renderWithContext(<MiniCart />, propsProvider);
  expect(getByText(`1`)).toBeInTheDocument();
});
