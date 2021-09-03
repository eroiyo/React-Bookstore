import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pushBook } from '../../redux/books/Book';
import { apiAdd } from '../../Api';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Comming Soon');
  const [genre, setGenre] = useState('');

  const changeTitle = (e) => setTitle(e.target.value);
  const changeAuthor = () => setAuthor(author);
  const changeGenre = (e) => setGenre(e.target.value);

  const submitBook = async (e) => {
    const newBook = {
      id: Date.now(),
      genre,
      title,
      author: 'Coming Soon',
    };
    e.preventDefault();
    dispatch(pushBook(newBook));
    await apiAdd(title, genre, newBook.id);
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
