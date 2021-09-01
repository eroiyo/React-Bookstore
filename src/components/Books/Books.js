import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from './Book';

const Books = (props) => {
  const { books } = props;
  const bookQuantity = useSelector((state) => state.books.length);
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
            id, title, author, genre,
          } = book;
          return (
            <li key={book.id}>
              <Book id={id} title={title} genre={genre} author={author} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

Books.defaultProps = {
  books: [{}],
};

Books.displayName = 'Books';

export default Books;
