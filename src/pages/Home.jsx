import MovieList from 'components/MovieList';
import { useHttpRequest } from 'hooks/useHttpRequest';
import { fetchTrendingMovies } from 'services/api';

const Home = ({ movies }) => {
  const [trendingMovies] = useHttpRequest(fetchTrendingMovies);

  // console.log(trendingMovies);

  return (
    <div className="container">
      {trendingMovies && <MovieList movies={trendingMovies} />}
    </div>
  );
};

export default Home;
