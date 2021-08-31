/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

export const Book = (props) => {
  const {
    onClick, genre, title, author, id,
  } = props;
  return (
    <div className="square">
      <p className="genre">{genre}</p>
      <h2 className="title">{title}</h2>
      <p className="author">{author}</p>
      <button type="button" onClick={() => onClick(id)}>delete</button>
    </div>
  );
};

Book.displayName = 'Book';

const propTypes = {
  genre: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  id: '-1',
  title: 'A Python Hello World',
  genre: 'Education',
  author: 'Arturo Ortega',
  onClick: () => {},
};

PropTypes.checkPropTypes(propTypes, defaultProps, 'prop', 'Book');
