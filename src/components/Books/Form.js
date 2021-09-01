import { pushBook } from '../../redux/books/Book';
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();
  const submitBook = (e) => {
    const bookName = document.getElementById('book-title').value;
    const bookAuthor = document.getElementById('book-author').value;
    const bookGenre = document.getElementById('book-genre').value;
    const newBook = {
      id: Date.now(),
      genre: bookGenre,
      title: bookName,
      author: bookAuthor,
    };
    dispatch(pushBook(newBook));
    e.preventDefault();
  };
  return (
    <form onSubmit={submitBook}>
      <input placeholder="title" type="text" id="book-title" />
      <input placeholder="genre" type="text" id="book-genre" />
      <input placeholder="author" type="text" id="book-author" />
      <button type="submit">submit</button>
    </form>
  );
};

Form.displayName = 'Form';

export default Form;
