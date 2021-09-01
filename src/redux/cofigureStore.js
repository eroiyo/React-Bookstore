import { createStore } from 'redux';
import booksReducer from './books/Book';

const store = createStore(booksReducer);
export default store;
