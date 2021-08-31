import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './FilmsView.module.css';

import { IMAGE_URL } from '../../services/apiService';
import photo from '../../images/movie-roll-court.jpg';

export default function FilmsView({ films }) {
  const { url } = useRouteMatch();

  return (
    <ul className={s.list}>
      {films.map(film => (
        <li key={film.id} className={s.item}>
          <Link to={`${url}/${film.id}`} className={s.link}>
            <img
              className={s.image}
              src={film.poster_path ? IMAGE_URL + film.poster_path : photo}
              alt={film.title}
              width="300"
              height="450"
            />
            <p className={s.title}>{film.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

FilmsView.propTypes = {
  images: PropTypes.array,
};
