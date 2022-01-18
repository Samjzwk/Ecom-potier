import { FC } from 'react';
import Styles from './detailledPrice.module.scss';

interface IDetailledPrice {
  fullPriceCart: number;
  discount: () => number;
}

const DetailledPrice: FC<IDetailledPrice> = ({ fullPriceCart, discount }) => (
  <div className={Styles.detailledPrice}>
    <span>Prix du panier:</span>
    <span data-testid="totalPrice">
      {new Intl.NumberFormat(`fr-FR`, {
        style: `currency`,
        currency: `EUR`,
      }).format(fullPriceCart)}
    </span>
    <span>Discount: </span>
    <span>
      {new Intl.NumberFormat(`fr-FR`, {
        style: `currency`,
        currency: `EUR`,
      }).format(discount())}
    </span>
    <span className={Styles.totalPrice}>Prix Total: </span>
    <span className={Styles.totalValue}>
      {new Intl.NumberFormat(`fr-FR`, {
        style: `currency`,
        currency: `EUR`,
      }).format(fullPriceCart - discount())}
    </span>
  </div>
);

export default DetailledPrice;
