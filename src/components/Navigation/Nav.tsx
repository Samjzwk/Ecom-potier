import Link from 'next/link';
import MiniCart from '../Cart/MiniCart';
import Styles from './nav.module.scss';

function Nav() {
  return (
    <nav className={Styles.root}>
      <Link href="/cart">
        <a>
          <MiniCart />
        </a>
      </Link>
    </nav>
  );
}

export default Nav;
