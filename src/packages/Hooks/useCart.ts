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

  const discountCart = (offers: IOffer[], totalPrice: number) =>
    offers.reduce<number>((prev, curr) => {
      // prev < curr.value ? curr.value : prev)
      if (prev < curr.value) {
        if (curr.type === `slice`) {
          if (curr.sliceValue !== undefined && curr.sliceValue < totalPrice) {
            return curr.value;
          }
          return prev;
        }
        return curr.value;
      }
      return prev;
    }, 0);

  return {
    retrieveBooks,
    fullPriceCart,
    discountCart,
  };
};

export default useCart;
