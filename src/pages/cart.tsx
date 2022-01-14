import Head from 'next/head';
import styles from '@/styles/pages/cart.module.scss';

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

      <main className={styles.main} />
    </div>
  );
}
