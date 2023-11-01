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

export default Home;
