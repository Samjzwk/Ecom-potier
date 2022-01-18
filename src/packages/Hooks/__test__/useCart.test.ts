/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { render, screen, fireEvent, within } from '@testing-library/react';
import useCart from '@/packages/Hooks/useCart';
import { mockedBooks } from '@/packages/__mocks__/mocks';
import Cart from '@/pages/cart';
import { IOffer } from '@/types/discount';

describe(`useCartLogic`, () => {
  it(`>>>> it calculate totalPrice correctly according to books in cart`, () => {
    const isbns = [
      `c8fabf68-8374-48fe-a7ea-a00ccd07afff`,
      `a460afed-e5e7-4e39-a39d-c885c05db861`,
    ];
    const cart = {
      'c8fabf68-8374-48fe-a7ea-a00ccd07afff': 1,
      'a460afed-e5e7-4e39-a39d-c885c05db861': 1,
    };

    const { fullPriceCart, discountCart } = useCart(isbns, cart, mockedBooks);

    expect(fullPriceCart).toEqual(65);
  });

  it(`>>>> it choose percentage discount`, () => {
    const isbns = [
      `c8fabf68-8374-48fe-a7ea-a00ccd07afff`,
      `a460afed-e5e7-4e39-a39d-c885c05db861`,
    ];
    const cart = {
      'c8fabf68-8374-48fe-a7ea-a00ccd07afff': 1,
      'a460afed-e5e7-4e39-a39d-c885c05db861': 1,
    };

    const { fullPriceCart, discountCart } = useCart(isbns, cart, mockedBooks);

    const offers: IOffer[] = [
      {
        type: `percentage`,
        value: 30,
      },
      {
        type: `minus`,
        value: 15,
      },
      {
        type: `slice`,
        sliceValue: 100,
        value: 12,
      },
    ];
    expect(discountCart(offers, fullPriceCart)).toEqual(19.5);
  });

  it(`>>>> it choose minus discount`, () => {
    const isbns = [
      `c8fabf68-8374-48fe-a7ea-a00ccd07afff`,
      `a460afed-e5e7-4e39-a39d-c885c05db861`,
    ];
    const cart = {
      'c8fabf68-8374-48fe-a7ea-a00ccd07afff': 1,
      'a460afed-e5e7-4e39-a39d-c885c05db861': 1,
    };

    const { fullPriceCart, discountCart } = useCart(isbns, cart, mockedBooks);

    const offers: IOffer[] = [
      {
        type: `percentage`,
        value: 5,
      },
      {
        type: `minus`,
        value: 15,
      },
      {
        type: `slice`,
        sliceValue: 100,
        value: 12,
      },
    ];
    expect(discountCart(offers, fullPriceCart)).toEqual(15);
  });

  it(`>>>> it choose slice discount`, () => {
    const isbns = [
      `c8fabf68-8374-48fe-a7ea-a00ccd07afff`,
      `a460afed-e5e7-4e39-a39d-c885c05db861`,
    ];
    const cart = {
      'c8fabf68-8374-48fe-a7ea-a00ccd07afff': 5,
      'a460afed-e5e7-4e39-a39d-c885c05db861': 1,
    };

    const { fullPriceCart, discountCart } = useCart(isbns, cart, mockedBooks);

    const offers: IOffer[] = [
      {
        type: `percentage`,
        value: 5,
      },
      {
        type: `minus`,
        value: 15,
      },
      {
        type: `slice`,
        sliceValue: 100,
        value: 12,
      },
    ];
    expect(discountCart(offers, fullPriceCart)).toEqual(24);
  });
});
