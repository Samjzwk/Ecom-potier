import { FC } from 'react';
import Styles from './buyBtn.module.scss';
import useAddToCart from '../../packages/Hooks/useAddToCart';
import QtyUpdater from './QtyUpdater';

interface IBuyBtn {
  isbn: string;
}

const BuyBtn: FC<IBuyBtn> = ({ isbn }) => {
  const { addToCart, isPresent } = useAddToCart(isbn);

  return (
    <>
      {isPresent(isbn) ? (
        <QtyUpdater isbn={isbn} />
      ) : (
        <button type="button" className={Styles.btn} onClick={addToCart}>
          Ajouter au panier
        </button>
      )}
    </>
  );
};

export default BuyBtn;
