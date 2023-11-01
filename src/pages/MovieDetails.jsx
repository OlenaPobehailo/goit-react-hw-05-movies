import Details from 'components/Details/Details';
import { useHttpRequest } from 'hooks/useHttpRequest';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie] = useHttpRequest(fetchMovieById, movieId);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      {movie && (
        <div>
          <Details movie={movie} />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
