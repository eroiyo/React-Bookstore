/* eslint-disable linebreak-style */
const PUSH_BOOK = 'bookStore/books/PUSH_BOOK';
const DELETE_BOOK = 'bookStore/books/DELETE_BOOK';
const GET = 'bookStore/books/GET';

const initState = { books: [] };

export const pushBook = (extraBook) => ({
  type: PUSH_BOOK,
  extraBook,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export const getBooks = () => ({
  type: GET,
});

const reducer = (state = initState, action = { type: 'error' }) => {
  switch (action.type) {
    case PUSH_BOOK:
      state.books.push(action.extraBook);
      return state;
    case DELETE_BOOK:
      const books = state.books.filter((book) => book.id !== action.id);
      const newState = { books };
      return newState;
    case GET:
      return state;
    default:
      return state;
  }
};

export default reducer;
