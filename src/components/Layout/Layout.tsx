import { FC } from 'react';
import { CartProvider } from '@/packages/Context/cartContext';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout: FC = ({ children }) => (
  <>
    <CartProvider>
      <Header />
      {children}
    </CartProvider>
    <Footer />
  </>
);

export default Layout;
