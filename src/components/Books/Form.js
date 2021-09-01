import { pushBook } from '../../redux/books/Book';

const Form = () => {
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
  return (
    <form onSubmit={pushBook}>
      <input placeholder="title" type="text" id="book-title" />
      <input placeholder="genre" type="text" id="book-genre" />
      <input placeholder="author" type="text" id="book-author" />
      <button onClick={submitBook} type="button">submit</button>
    </form>
  );
};

Form.displayName = 'Form';

export default Form;
