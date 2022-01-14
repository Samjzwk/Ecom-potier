import Head from 'next/head';
import styles from '@/styles/pages/home.module.scss';
import Book from '@/components/Card/Book';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Potier - Vendeur d&apos;histoires</title>
        <meta
          name="description"
          content="Suivez les aventures d'un incroyable héro nommé Henri Potier"
        />
        <link rel="icon" href="/potier.ico" />
      </Head>

      <main className={styles.main}>
        <Book
          title="test"
          price={35}
          cover="test"
          synopsis="test"
          isbn="a460afed-e5e7-4e39-a39d-c885c05db861"
        />
      </main>
    </div>
  );
}
