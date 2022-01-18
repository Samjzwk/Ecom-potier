import { FC, useState, useEffect } from 'react';
import useAddToCart from '../../packages/Hooks/useAddToCart';
import Styles from './qtyUpdater.module.scss';

interface IQtyUpdater {
  isbn: string;
}

const QtyUpdater: FC<IQtyUpdater> = ({ isbn }) => {
  const { increment, decrement, retrieveQty } = useAddToCart(isbn);
  const [qtyValue, setQtyValue] = useState(retrieveQty()); // useState to avoid the uncontrolled error when remove

  useEffect(() => {
    setQtyValue(retrieveQty());
  }, [retrieveQty]);

  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  return (
    <div className={Styles.qtyContainer}>
      <button type="button" className={Styles.btnQty} onClick={handleIncrement}>
        +
      </button>
      <input type="number" className={Styles.qty} value={qtyValue} readOnly />
      <button type="button" className={Styles.btnQty} onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default QtyUpdater;
