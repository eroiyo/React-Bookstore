import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="navbar">
      <li>
        <Link to="/" className="Logo booksButton">Bookstore CMS</Link>
      </li>
      <li>
        <Link to="/" className="navLink booksButton">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories" className="navLink categoriesButton">CATEGORIES</Link>
      </li>
    </ul>
    <button className="portrait" type="button">
      <i className="fa fa-user user" aria-hidden="true" />
    </button>
  </header>
);

Header.displayName = 'Header';

export default Header;
