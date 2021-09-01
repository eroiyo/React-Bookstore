import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <ul className="navbar">
    <li>
      <Link to="/" className="Logo booksButton">Bookstore CMS</Link>
    </li>
    <li>
      <Link to="/" className="navLink booksButton">Books</Link>
    </li>
    <li>
      <Link to="/categories" className="navLink categoriesButton">Categories</Link>
    </li>
    <li>
      <div className="Portrait">Portrait</div>
    </li>
  </ul>
);

Header.displayName = 'Header';

export default Header;
