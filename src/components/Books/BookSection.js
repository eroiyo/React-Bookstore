import { useSelector } from 'react-redux';
import Books from './Books';
import Form from './Form';

const BooksPage = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <Books books={books} />
      <Form />
    </div>
  );
};

export default BooksPage;
