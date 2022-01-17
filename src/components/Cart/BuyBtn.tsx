import { FC } from 'react';
import Styles from './buyBtn.module.scss';
import useAddToCart from '../../packages/Hooks/useAddToCart';
import QtyUpdater from './QtyUpdater';

interface IBuyBtn {
  isbn: string;
  initialQty?: number;
}

const BuyBtn: FC<IBuyBtn> = ({ isbn }) => {
  const { addToCart, isPresent, increment, decrement, retrieveQty } =
    useAddToCart(isbn);

  return (
    <>
      {isPresent(isbn) ? (
        <QtyUpdater
          increment={increment}
          decrement={decrement}
          qty={retrieveQty()}
        />
      ) : (
        <button type="button" className={Styles.btn} onClick={addToCart}>
          Ajouter au panier
        </button>
      )}
    </>
  );
};

export default BuyBtn;
