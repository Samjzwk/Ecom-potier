import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Search from '../Search/Search';
import Styles from './nav.module.scss';

function Nav() {
  const router = useRouter();

  return (
    <nav className={Styles.root}>
      {router.pathname === `/` && <Search />}
      <Link href="/cart">
        <a>
          <span className={Styles.srOnly}>Aller au panier</span>
          <Icon icon="mdi:cart-variant" color="white" height="34" />
        </a>
      </Link>
    </nav>
  );
}

export default Nav;
