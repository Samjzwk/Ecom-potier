import { InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import Styles from '@/styles/pages/cart.module.scss';
import axios from 'axios';
import IBook from '@/types/book';
import { useContext, useState, useEffect, useCallback } from 'react';
import CartContext from '@/packages/Context/cartContext';
import useCart from '@/packages/Hooks/useCart';
import CartItem from '@/components/CartItem/CartItem';
import { IDiscount, IOffer } from '@/types/discount';

const Cart: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ books }) => {
  const { cart } = useContext(CartContext);
  const [isbns, setIsbns] = useState<string[]>([]);
  const [offers, setOffers] = useState<IOffer[]>([]);
  const { retrieveBooks, fullPriceCart, discountCart } = useCart(
    isbns,
    cart,
    books,
  );

  useEffect(() => {
    const newIsbns = Object.keys(cart);
    if (
      isbns.length !== newIsbns.length ||
      !newIsbns.every((isbn) => isbns.includes(isbn))
    )
      setIsbns(newIsbns);
  }, [cart, isbns]);

  useEffect(() => {
    const retrieveDiscounts = async () => {
      try {
        const result = await axios.get<IDiscount>(
          `https://henri-potier.techx.fr/books/${isbns.join(
            `,`,
          )}/commercialOffers`,
        );
        setOffers(result.data.offers);
      } catch {
        throw new Error(`Can't fetch commercialOffers`);
      }
    };
    if (isbns.length > 0) retrieveDiscounts();
  }, [isbns]);

  const discount = useCallback(() => {
    const updatedDiscount = discountCart(offers, fullPriceCart);
    return updatedDiscount;
  }, [discountCart, offers, fullPriceCart]);

  const retrieveCartItem = retrieveBooks.map(
    ({ title, cover, isbn, price, synopsis }) => (
      <CartItem
        title={title}
        cover={cover}
        price={price}
        isbn={isbn}
        synopsis={synopsis}
        key={isbn}
      />
    ),
  );

  return (
    <div className={Styles.container}>
      <Head>
        <title>Potier - panier</title>
        <meta name="description" content="page panier du site Potier" />
        <link rel="icon" href="/potier.ico" />
      </Head>

      <main className={Styles.main}>
        <div className={Styles.recap}>
          <ul>{retrieveCartItem}</ul>
        </div>
        <div className={Styles.detailledPrice}>
          <span>Prix du panier:</span>
          <span>
            {new Intl.NumberFormat(`fr-FR`, {
              style: `currency`,
              currency: `EUR`,
            }).format(fullPriceCart)}
          </span>
          <span>Discount: </span>
          <span>
            {new Intl.NumberFormat(`fr-FR`, {
              style: `currency`,
              currency: `EUR`,
            }).format(discount())}
          </span>
          <span className={Styles.totalPrice}>Prix Total: </span>
          <span className={Styles.totalValue}>
            {new Intl.NumberFormat(`fr-FR`, {
              style: `currency`,
              currency: `EUR`,
            }).format(fullPriceCart - discount())}
          </span>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  let books: IBook[] | [];
  // we fetch the same endpoint for books to get the most updated book price.
  try {
    const result = await axios.get<IBook[]>(
      `https://henri-potier.techx.fr/books`,
    );
    books = result.data;
  } catch {
    books = [];
  }

  return {
    props: {
      books,
    },
  };
};

export default Cart;
