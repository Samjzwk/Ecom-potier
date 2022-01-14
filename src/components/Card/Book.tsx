import Styles from './book.module.scss';

interface IBook {
  title: string;
  cover: string;
  price: number;
  isbn: string;
  synopsis: string;
}

function Book(props: IBook) {
  const { title, cover, price } = props;

  return (
    <div className={Styles.root}>
      {title}
      {cover}
      {price}
    </div>
  );
}

export default Book;
