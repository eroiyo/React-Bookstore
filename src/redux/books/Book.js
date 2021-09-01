/* eslint-disable linebreak-style */
const PUSH_BOOK = 'bookStore/books/PUSH_BOOK';
const DELETE_BOOK = 'bookStore/books/DELETE_BOOK';
const GET = 'bookStore/books/GET';

const initState = {
  books: [{
    id: 0,
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 1,
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 2,
    genre: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
  ],
};

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

const reducer = (action = { type: 'error' }, state = initState) => {
  switch (action.type) {
    case PUSH_BOOK:
      return [...state.books, action.extraBook];
    case DELETE_BOOK:
      return state.books.filter((book) => book.id !== action.id);
    case GET:
      return state;
    default:
      return state;
  }
};

export default reducer;
