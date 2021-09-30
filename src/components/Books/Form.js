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
      category: genre,
      title,
      author: 'Coming Soon',
    };
    e.preventDefault();
    dispatch(pushBook(newBook));
    document.getElementById('form').reset();
    await apiAdd(title, genre, newBook.id);
  };
  return (
    <form id="form" onSubmit={submitBook}>
      <div className="xdivisor" />
      <h2 className="form-title">ADD NEW BOOK</h2>
      <input required placeholder="Book Title" className="input" onChange={changeTitle} type="text" id="book-title" />
      <select required className="input genre-categorys" onChange={changeGenre} placeholder="Category" id="book-genre">
        <option value="" disabled selected hidden>Category</option>
        <option value="Action">Action</option>
        <option value="Horror">Horror</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Romance">Romance</option>
        <option value="Economy">Economy</option>
        <option value="Mystery">Mystery</option>
      </select>
      <input placeholder="author" className="nothing" onChange={changeAuthor} type="text" id="book-author" />
      <button id="submit" type="submit">ADD BOOK</button>
    </form>
  );
};

Form.displayName = 'Form';

export default Form;
