import { useRef, FC, ChangeEvent } from 'react';
import { Icon } from '@iconify/react';
import Styles from './search.module.scss';

interface ISearch {
  triggerSearch: (args0: string) => void;
}

const Search: FC<ISearch> = ({ triggerSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    triggerSearch(e.target.value);
  };

  return (
    <>
      <div className={Styles.searchInput}>
        <input
          type="text"
          className={Styles.input}
          ref={inputRef}
          placeholder="Rechercher un livre"
          onChange={handleInputSearch}
        />
        <Icon
          icon="fluent:book-search-20-filled"
          color="white"
          height="40"
          className={Styles.searchIco}
        />
      </div>
    </>
  );
};

export default Search;
