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
      <li>
        <div className="Portrait">Portrait</div>
      </li>
    </ul>
  </header>
);

Header.displayName = 'Header';

export default Header;
