import { InferGetStaticPropsType, NextPage } from 'next';
import axios from 'axios';
import Head from 'next/head';
import Styles from '@/styles/pages/home.module.scss';
import Search from '@/components/Search/Search';
import IBook from '@/types/book';
import Book from '@/components/Book/Book';
import useSearch from '@/packages/Hooks/useSearch';
import Image from 'next/image';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  books,
}) => {
  const { renderedBooks, triggerSearch } = useSearch(books);

  const retrieveBooks = renderedBooks.map((book: IBook) => (
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
      <li className={Styles.missingBooks}>
        <Image
          src="/missingBooks.svg"
          width={400}
          height={374}
          alt="Livres non trouvés"
        />
        <p>Les livres se font la malle !</p>
      </li>
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
        <Search triggerSearch={triggerSearch} />
        <ul className={Styles.listOfBooks}>{renderProductPage}</ul>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  let books: IBook[] | [];
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
    revalidate: 60,
  };
};

export default Home;
