import { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
