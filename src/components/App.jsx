import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import MovieDetailsPage from 'pages/MovieDetails';
import HomePage from 'pages/Home';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
