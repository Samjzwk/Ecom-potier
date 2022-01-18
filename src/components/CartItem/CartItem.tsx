import Image from 'next/image';
import IBook from '@/types/book';
import { FC } from 'react';
import useAddToCart from '@/packages/Hooks/useAddToCart';
import { Icon } from '@iconify/react';
import Styles from './cartItem.module.scss';
import QtyUpdater from '../Cart/QtyUpdater';

const CartItem: FC<IBook> = ({ title, cover, price, isbn }) => {
  const { remove } = useAddToCart(isbn);

  return (
    <li className={Styles.itemContainer}>
      <div className={Styles.cover}>
        <Image
          layout="fill"
          objectFit="cover"
          src={cover}
          alt={`Photo représentant le livre ${title}`}
        />
      </div>

      <div className={Styles.itemInfo}>
        <p className={Styles.title}>{title}</p>
        <div className={Styles.price}>
          <span className={Styles.unit}>
            unitaire:
            {new Intl.NumberFormat(`fr-FR`, {
              style: `currency`,
              currency: `EUR`,
            }).format(price)}
          </span>
        </div>
        <div className={Styles.actions}>
          <QtyUpdater isbn={isbn} />
          <button className={Styles.delete} type="button" onClick={remove}>
            <span className={Styles.srOnly}>Supprimer du panier</span>
            <Icon icon="bi:trash-fill" color="#062a4e" height={24} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
