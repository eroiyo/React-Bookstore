/* eslint-disable linebreak-style */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';

class Books extends React.PureComponent {
    state = {
      books: [{
        id: 0,
        genre: 'Action',
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
      },
      {
        id: 1,
        genre: 'Science Fiction',
        title: 'Dune',
        author: 'Frank Herbert',
      },
      {
        id: 2,
        genre: 'Economy',
        title: 'Capital in the Twenty-First Century',
        author: 'Suzanne Collins',
      },
      ],
    }

    pushBook = (e) => {
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
      this.setState({
        bookList: [...this.state.bookList, newBook],
      });
    }

  deleteBook = (id) => {
    this.setState({
      books: [
        ...this.state.books.filter((book) => book.id !== id),
      ],
    });
  }

  render() {
    return (
      <div>
        <ul className="booklist">
          {this.state.books.map((book) => (
            <li key={book.id}>
              <div className="square">
                <p className="genre">{book.genre}</p>
                <h2 className="title">{book.title}</h2>
                <p className="author">{book.author}</p>
                <button type="button" onClick={() => this.deleteBook(book.id)}>delete</button>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={this.addBook}>
          <input type="text" id="book-title" />
          <input type="text" id="book-genre" />
          <input type="text" id="book-author" />
          <button type="button">submit</button>
        </form>
      </div>
    );
  }
}
