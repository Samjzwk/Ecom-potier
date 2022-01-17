import IBook from '@/types/book';
import Image from 'next/image';
import { FC } from 'react';
import Styles from './book.module.scss';
import BuyBtn from '../Cart/BuyBtn';

const Book: FC<IBook> = ({ title, cover, price, synopsis, isbn }) => (
  <div className={Styles.root}>
    <div className={Styles.book}>
      <div className={Styles.recto}>
        <Image
          layout="intrinsic"
          src={cover}
          className={Styles.cover}
          alt={`Photo représentant le livre ${title}`}
          width={350}
          height={500}
        />
      </div>
      <p className={Styles.verso}>{synopsis}</p>
    </div>
    <p className={Styles.title}>{title}</p>
    <div className={Styles.buyContainer}>
      <span className={Styles.price}>
        {new Intl.NumberFormat(`fr-FR`, {
          style: `currency`,
          currency: `EUR`,
        }).format(price)}
      </span>
      <BuyBtn isbn={isbn} />
    </div>
  </div>
);

export default Book;
