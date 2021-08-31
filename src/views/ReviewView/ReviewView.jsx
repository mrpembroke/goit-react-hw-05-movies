import { useState, useEffect } from 'react';
import s from './ReviewView.module.css';

import { fetchReviewsForFilm } from '../../services/apiService';

export default function ReviewView({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsForFilm(movieId).then(request => setReviews(request.results));
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      {reviews.length > 0 ? (
        <>
          <ul className={s.list}>
            {reviews.map((item, index) => (
              <li key={index} className={s.item}>
                <h3 className={s.title}> {item.author}</h3>
                <p className={s.descr}> {item.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h3 className={s.text}>No reviews to show</h3>
      )}
    </div>
  );
}
