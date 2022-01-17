import { Icon } from '@iconify/react';
import { useContext, FC } from 'react';
import CartContext from '@/packages/Context/cartContext';
import Styles from './minicart.module.scss';

const MiniCart: FC = () => {
  const { cartSize } = useContext(CartContext);

  return (
    <div className={Styles.root}>
      <span className={Styles.srOnly}>Aller au panier</span>
      <Icon icon="mdi:cart-variant" color="white" height="34" />
      <span className={Styles.qty}>{cartSize()}</span>
    </div>
  );
};

export default MiniCart;
