import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import PendingView from './views/PendingView/PendingView';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const SingleFilmView = lazy(() =>
  import('./views/SingleFilmView/SingleFilmView'),
);
const MoviesSearchView = lazy(() =>
  import('./views/MoviesSearchView/MoviesSearchView'),
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<PendingView />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies/:moviesId">
            <SingleFilmView />
          </Route>

          <Route path="/movies">
            <MoviesSearchView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
