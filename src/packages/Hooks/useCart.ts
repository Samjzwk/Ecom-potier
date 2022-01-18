import IBook from '@/types/book';
import ICartItem from '@/types/cart';
import { IOffer } from '@/types/discount';

const useCart = (isbns: string[], cart: ICartItem, books: IBook[]) => {
  const retrieveBooks = books.filter((book) => isbns.includes(book.isbn));

  const fullPriceCart: number = retrieveBooks.reduce<number>(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * cart[currentValue.isbn],
    0,
  );

  const discountCart = (offers: IOffer[], totalPrice: number) => {
    const resultFromOffers: number[] = offers.map((offer) => {
      switch (offer.type) {
        case `percentage`:
          return totalPrice * (offer.value / 100);
        case `minus`:
          return offer.value;
        case `slice`:
          return offer.sliceValue && totalPrice >= offer.sliceValue
            ? Math.floor(totalPrice / offer.sliceValue) * offer.value
            : 0;
        default:
          return 0;
      }
    });

    return resultFromOffers.length === 0 ? 0 : Math.max(...resultFromOffers);
  };

  return {
    retrieveBooks,
    fullPriceCart,
    discountCart,
  };
};

export default useCart;
