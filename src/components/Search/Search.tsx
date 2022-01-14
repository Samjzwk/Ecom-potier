import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import Styles from './search.module.scss';

function Search() {
  const [isOpen, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <>
      {isOpen && (
        <div className={Styles.searchInput}>
          <input type="text" className={Styles.input} ref={inputRef} />
        </div>
      )}
      <Icon
        icon="fluent:book-search-20-filled"
        color="white"
        height="34"
        onClick={handleClick}
        className={Styles.searchIco}
      />
    </>
  );
}

export default Search;
