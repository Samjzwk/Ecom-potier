import { Icon } from '@iconify/react';
import Link from 'next/link';
import Nav from '../Navigation/Nav';
import Styles from './header.module.scss';

function Header() {
  return (
    <header className={Styles.root}>
      <div className={Styles.headerContainer}>
        <Link href="/">
          <a className={Styles.logoContainer}>
            <Icon icon="whh:harrypotter" color="white" height="34" />
            <span className={Styles.logoTitle}>Potier</span>
          </a>
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
