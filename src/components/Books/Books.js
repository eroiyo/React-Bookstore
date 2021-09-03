import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../Api';
import { setBooks } from '../../redux/books/Book';
import Book from './Book';

const Books = () => {
  const bookQuantity = useSelector((state) => state.books.length);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(async () => {
    const result = await fetchBooks();
    dispatch(setBooks(result));
  }, []);
  return (
    <div>
      <h2>
        Number of books
        {' '}
        {bookQuantity}
      </h2>
      <ul className="booklist">
        {books.map((book) => {
          const {
            id, title, author, category,
          } = book;
          return (
            <li key={book.id}>
              <Book id={id} title={title} genre={category} author={author} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Books.displayName = 'Books';

export default Books;
