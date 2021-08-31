import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onHandleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return toast.error(
        'No-no! Dont joke with me! Enter something interesting!',
      );
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onHandleSubmit}>
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__buttonLabel}>Search</span>
        </button>

        <input
          className={s.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
