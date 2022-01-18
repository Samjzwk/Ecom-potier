/* eslint-disable @typescript-eslint/ban-types */
import { cleanup, render, screen } from '@testing-library/react';
import Cart from '@/pages/cart';
import CartContext from '@/packages/Context/cartContext';
import { mockedBooks } from '@/packages/__mocks__/mocks';

describe(`Cart`, () => {
  afterEach(() => {
    cleanup();
  });

  const renderWithContext = (component: any, propsProvider: {}) => ({
    ...render(
      <CartContext.Provider value={propsProvider}>
        {component}
      </CartContext.Provider>,
    ),
  });

  it(`>>>> it show empty cart`, () => {
    const propsProvider = {
      cart: {},
    };
    renderWithContext(<Cart books={mockedBooks} />, propsProvider);

    expect(screen.getByText(`Votre panier est vide !`)).toBeInTheDocument();
  });

  it(`>>>> it renders the item cart according to context cart`, () => {
    const propsProvider = {
      cart: { 'c8fabf68-8374-48fe-a7ea-a00ccd07afff': 1 },
    };
    renderWithContext(<Cart books={mockedBooks} />, propsProvider);

    expect(
      screen.getByText(`Henri Potier à l'école des sorciers`),
    ).toBeInTheDocument();

    const BookChapterTwo = screen.queryByText(
      `Henri Potier et la Chambre des secrets\``,
    );
    expect(BookChapterTwo).not.toBeInTheDocument();
  });

  it(`>>>> it show empty cart if can't fetch product`, () => {
    const propsProvider = {
      cart: { 'c8fabf68-8374-48fe-a7ea-a00ccd07afff': 1 },
    };
    const { unmount } = renderWithContext(<Cart books={[]} />, propsProvider);

    expect(screen.getByText(`Votre panier est vide !`)).toBeInTheDocument();
    unmount();
  });
});
