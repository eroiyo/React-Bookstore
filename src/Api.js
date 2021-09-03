import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/n2xKhWmTLEctb4mehAQT/books';

export const fetchBooks = async () => {
  const response = await axios.get(baseURL);
  const buffer = Object.values((response.data));
  const buffertwo = Object.keys((response.data));
  const result = [];
  buffer.forEach((arr, index) => {
    result.push({ ...arr[0], ...{ id: buffertwo[index] } });
  });
  return result;
};

export const apiAdd = async (title, genre, id) => {
  const book = {
    item_id: id,
    category: genre,
    title,
  };
  const response = await axios.post(baseURL, book);
  return response.data;
};

export const apiDelete = async (id) => {
  const newURL = `${baseURL}/${id}`;
  const response = await axios({
    method: 'DELETE',
    url: newURL,
    data: {
      item_id: id,
    },
  });
  return (response.data);
};
