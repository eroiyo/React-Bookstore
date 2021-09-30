import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/Book';
import { apiDelete } from '../../Api';

const Book = (props) => {
  const dispatch = useDispatch();
  const forClick = async (id) => {
    dispatch(deleteBook(id));
    await apiDelete(id);
  };
  const {
    genre, title, author, id,
  } = props;
  return (
    <div className="book">
      <div className="square">
        <p className="genre">{genre}</p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="buttons">
          <button type="button" className="button">Comment</button>
          <div className="line" />
          <button type="button" className="button" onClick={() => (forClick(id))}>Remove</button>
          <div className="line" />
          <button type="button" className="button">Edit</button>
        </div>
      </div>
      <div className="square2">
        <div className="progress">
          <div className="circle" />
          <div className="progress-text">
            <h3 className="percentage">75%</h3>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="divider" />
        <div className="chapter-box">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <h2 className="chapter-title">Introduction</h2>
          <button type="button" className="buttontwo">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string,
  genre: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.displayName = 'Book';

Book.defaultProps = {
  id: '-1',
  title: 'A Python Hello World',
  genre: 'Education',
  author: 'Coming Soon',
};

export default Book;
