import PropTypes from 'prop-types';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';
import { useHttpRequest } from 'hooks/useHttpRequest';
import { fetchTrendingMovies } from 'services/api';

const Home = ({ movies }) => {
  const [trendingMovies, { isLoading, error }] =
    useHttpRequest(fetchTrendingMovies);

  return (
    <div className="container">
      {isLoading && <Loader/>}
      {error && <p>Error: {error}</p>}
      {trendingMovies && <MovieList movies={trendingMovies} />}
    </div>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Home;
