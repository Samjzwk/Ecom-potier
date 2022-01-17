import { useState } from 'react';
import IBook from '@/types/book';

const useSearch = (books: IBook[]) => {
  const [renderedBooks, setRenderedBooks] = useState(books);

  const search = (searchTerm: string) => {
    const matchedBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setRenderedBooks(matchedBooks);
  };

  const triggerSearch = (searchTerm: string) => {
    if (searchTerm.length === 0) setRenderedBooks(books);
    else search(searchTerm);
  };

  return {
    renderedBooks,
    triggerSearch,
  };
};

export default useSearch;
