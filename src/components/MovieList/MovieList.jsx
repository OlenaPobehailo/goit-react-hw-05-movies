import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledList } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledList>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
    </StyledList>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
