import Details from 'components/Details/Details';
import { useHttpRequest } from 'hooks/useHttpRequest';
import { useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  // console.log(location);
  const backRef = useRef(location.state?.from||'/');
  const [movie] = useHttpRequest(fetchMovieById, movieId);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <Link to={backRef.current}>Back</Link>
      {movie && (
        <div>
          <Details movie={movie} />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
