/* eslint-disable @typescript-eslint/ban-types */
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BuyBtn from '@/components/Cart/BuyBtn';
import { CartProvider } from '@/packages/Context/cartContext';

describe(`AddToCart Component`, () => {
  const renderWithContext = (component: any) => ({
    ...render(<CartProvider>{component}</CartProvider>),
  });

  afterEach(cleanup);

  it(`>>>> it show button 'add to cart' if actual product is not in the cart state`, () => {
    renderWithContext(<BuyBtn isbn="abcd-efgh" />);
    expect(screen.getByText(`Ajouter au panier`)).toBeInTheDocument();
  });

  it(`>>>> it add to cart when the btn is pressed & replace btn add to cart by qtyUpdater with qty 1`, () => {
    renderWithContext(<BuyBtn isbn="abcd-efgh" />);
    const btn = screen.getByText(`Ajouter au panier`);

    fireEvent(
      btn,
      new MouseEvent(`click`, {
        bubbles: true,
        cancelable: true,
      }),
    );
    const input = screen.getByDisplayValue(1);
    const addBtn = screen.getByText(`+`);
    const minusBtn = screen.getByText(`-`);

    expect(input).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
    expect(minusBtn).toBeInTheDocument();
  });

  it(`>>>> it should update the qty by add one when + btn is press`, () => {
    renderWithContext(<BuyBtn isbn="abcd-efgh" />);

    const addBtn = screen.getByText(`+`);
    fireEvent(
      addBtn,
      new MouseEvent(`click`, {
        bubbles: true,
        cancelable: true,
      }),
    );
    const input = screen.getByDisplayValue(2);
    expect(input).toBeInTheDocument();
  });

  it(`>>>> it should update the qty by take off one when - btn is press`, () => {
    renderWithContext(<BuyBtn isbn="abcd-efgh" />);
    const minusBtn = screen.getByText(`-`);
    fireEvent(
      minusBtn,
      new MouseEvent(`click`, {
        bubbles: true,
        cancelable: true,
      }),
    );
    const input = screen.getByDisplayValue(1);
    expect(input).toBeInTheDocument();
  });

  it(`>>>> it should show btn 'add to cart' if no quantity in cart after pressing minus qty to 0`, () => {
    renderWithContext(<BuyBtn isbn="abcd-efgh" />);
    const minusBtn = screen.getByText(`-`);
    fireEvent(
      minusBtn,
      new MouseEvent(`click`, {
        bubbles: true,
        cancelable: true,
      }),
    );
    const btn = screen.getByText(`Ajouter au panier`);
    expect(btn).toBeInTheDocument();
  });
});
