import { FC, useState } from 'react';
import Styles from './qtyUpdater.module.scss';

interface IQtyUpdater {
  increment: () => void;
  decrement: () => void;
  qty: number;
}

const QtyUpdater: FC<IQtyUpdater> = ({ increment, decrement, qty }) => {
  const [qtyValue, setQtyValue] = useState(qty);

  const handleIncrement = () => {
    increment();
    setQtyValue((prev) => prev + 1); // avoid the uncontrolled input
  };

  const handleDecrement = () => {
    decrement();
    setQtyValue((prev) => prev - 1); // avoid the uncontrolled input
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
