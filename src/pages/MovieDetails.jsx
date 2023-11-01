import Details from 'components/Details/Details';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then(data => setMovie(data));
  }, [movieId]);

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
