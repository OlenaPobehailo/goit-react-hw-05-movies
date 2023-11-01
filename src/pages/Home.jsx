import MovieList from 'components/MovieList';
import { useHttpRequest } from 'hooks/useHttpRequest';
import { fetchTrendingMovies } from 'services/api';

const Home = ({ movies }) => {
  const [trendingMovies, { isLoading, error }] =
    useHttpRequest(fetchTrendingMovies);

  // console.log(trendingMovies);

  return (
    <div className="container">
      {isLoading && <h1>Loading trending movies...</h1>}
      {error && <p>Error: {error}</p>}
      {trendingMovies && <MovieList movies={trendingMovies} />}
    </div>
  );
};

export default Home;
