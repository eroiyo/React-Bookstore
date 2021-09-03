/* eslint-disable linebreak-style */
import { apiDelete } from "../../Api";
const PUSH_BOOK = 'bookStore/books/PUSH_BOOK';
const DELETE_BOOK = 'bookStore/books/DELETE_BOOK';
const GET = 'bookStore/books/GET';
const SET = 'bookStore/books/SET';

const initState = [];

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

export const setBooks = (books) => ({
  type: SET,
  books,
});
const reducer = (state = initState, action = { type: 'error' }) => {
  let books;
  switch (action.type) {
    case PUSH_BOOK:
      state.push(action.extraBook);
      return state;
    case DELETE_BOOK:
      books = state.filter((book) => book.id !== action.id);
      return books;
    case GET:
      return state;
    case SET:
      return action.books;
    default:
      return state;
  }
};

export default reducer;
