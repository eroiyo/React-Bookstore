import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pushBook } from '../../redux/books/Book';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const changeTitle = (e) => setTitle(e.target.value);
  const changeAuthor = (e) => setAuthor(e.target.value);
  const changeGenre = (e) => setGenre(e.target.value);

  const submitBook = (e) => {
    const newBook = {
      id: Date.now(),
      genre,
      title,
      author,
    };
    dispatch(pushBook(newBook));
    e.preventDefault();
  };
  return (
    <form onSubmit={submitBook}>
      <input placeholder="title" onChange={changeTitle} type="text" id="book-title" />
      <input placeholder="genre" onChange={changeGenre} type="text" id="book-genre" />
      <input placeholder="author" onChange={changeAuthor} type="text" id="book-author" />
      <button type="submit">submit</button>
    </form>
  );
};

Form.displayName = 'Form';

export default Form;
