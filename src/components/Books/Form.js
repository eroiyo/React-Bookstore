/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import { pushBook } from '../../redux/books/Book';

export const Form = () => {
  const submitBook = (e) => {
    e.preventDefault();
    const bookName = document.getElementById('book-title').value;
    const bookAuthor = document.getElementById('book-author').value;
    const bookGenre = document.getElementById('book-genre').value;
    const newBook = {
      id: Date.now(),
      genre: bookGenre,
      title: bookName,
      author: bookAuthor,
    };
    pushBook(newBook);
  };

    <form onSubmit={this.addBook}>
      <input type="text" id="book-title" />
      <input type="text" id="book-genre" />
      <input type="text" id="book-author" />
      <button onClick={submitBook} type="button">submit</button>
    </form>;
};
