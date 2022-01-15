import { GetStaticProps, InferGetStaticPropsType } from 'next';
import axios from 'axios';
import Head from 'next/head';
import Styles from '@/styles/pages/home.module.scss';
import IBook from '@/types/book';
import Book from '@/components/Book/Book';

export default function Home({
  books,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const retrieveBooks = books.map((book: IBook) => (
    <li className={Styles.items} key={book.isbn}>
      <Book
        title={book.title}
        price={book.price}
        cover={book.cover}
        synopsis={book.synopsis}
        isbn={book.isbn}
      />
    </li>
  ));

  const renderProductPage =
    retrieveBooks.length > 0 ? (
      retrieveBooks
    ) : (
      <li>{`il n'y a plus de livres :'( `}</li>
    );

  return (
    <div className={Styles.container}>
      <Head>
        <title>Potier - Vendeur d&apos;histoires</title>
        <meta
          name="description"
          content="Suivez les aventures d'un incroyable héro nommé Henri Potier"
        />
        <link rel="icon" href="/potier.ico" />
      </Head>

      <main className={Styles.main}>
        <ul className={Styles.listOfBooks}>{renderProductPage}</ul>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await axios.get(`https://henri-potier.techx.fr/books`);
  const books = result.data;

  return {
    props: {
      books,
    },
    // revalidate: 20, @TODO: remove when finished
  };
};
