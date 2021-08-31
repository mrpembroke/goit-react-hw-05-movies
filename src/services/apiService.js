const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '311e10b51bc9317653ca4fba90925571';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopularFilmsForToday() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
}

export function fetchFilmsByKeyWord(name) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${name}&page=1&include_adult=false`,
  );
}

export function fetchPrimaryInfoAboutFilm(movie_id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movie_id}?api_key=${KEY}`);
}

export function fetchCastForFilm(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}`,
  );
}
export function fetchReviewsForFilm(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}`,
  );
}
