import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Searchbar from '../../components/SearchBar/SearchBar';
import FilmStatus from '../FilmStatus/FilmStatus';

export default function MoviesSearchView() {
  const history = useHistory();
  const location = useLocation();
  const [filmName, setFilmName] = useState();
  const [films, setFilms] = useState([]);

  const requestUrl = new URLSearchParams(location.search).get('request');

  const onRequestChange = request => {
    history.push({ ...location, search: `request=${request}` });
  };

  const onSubmit = name => {
    setFilmName(name);
    setFilms([]);
    onRequestChange(name);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <FilmStatus filmName={filmName} requestUrl={requestUrl} />
    </>
  );
}
