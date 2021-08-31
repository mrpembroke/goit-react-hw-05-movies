import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import s from './HomeView.module.css';

import ErrorView from '../ErrorView/ErrorView';
import PendingView from '../PendingView/PendingView';

import {
  fetchPopularFilmsForToday,
  IMAGE_URL,
} from '../../services/apiService';

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function HomeView() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState({});
  const { url } = useRouteMatch();
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchPopularFilmsForToday()
      .then(request => setFilms(request.results))
      .then(setStatus(Status.RESOLVED))
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  if (status === Status.PENDING) {
    return <PendingView />;
  }

  if (status === Status.REJECTED) {
    return <ErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <h2 className={s.title}>Most Populars films for today</h2>
        <ul className={s.list}>
          {films.map(film => (
            <li key={film.id} className={s.list__item}>
              <Link className={s.title} to={`${url}movies/${film.id}`}>
                <img
                  className={s.image}
                  src={`${IMAGE_URL}${film.poster_path}`}
                  alt={film.title || film.name}
                />

                <div className={s.decsr}>
                  <h3 className={s.subtitle}>{film.title || film.name}</h3>
                  <p className={s.rating}>Rating: {film.vote_average}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
