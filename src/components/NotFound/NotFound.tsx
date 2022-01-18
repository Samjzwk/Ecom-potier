import { FC } from 'react';
import Image from 'next/image';
import Styles from './notFound.module.scss';

interface INotFound {
  text: string;
}

const NotFound: FC<INotFound> = ({ text }) => (
  <div className={Styles.notFound}>
    <Image
      src="/missingBooks.svg"
      width={400}
      height={374}
      alt="Livres non trouvés"
    />
    <p>{text}</p>
  </div>
);

export default NotFound;
