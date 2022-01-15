import IBook from '@/types/book';
import Image from 'next/image';
import Styles from './book.module.scss';
import BuyBtn from '../Cart/BuyBtn';

function Book(props: IBook) {
  const { title, cover, price, synopsis } = props;

  return (
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
        <BuyBtn />
      </div>
    </div>
  );
}

export default Book;
