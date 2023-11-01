import { basePosterUrl } from 'services/api';
import { Info, StyledWrapper } from './Details.styled';
import { Link, Outlet } from 'react-router-dom';

const Details = ({ movie }) => {
  console.log(movie);
  const { title, overview, genres, poster_path } = movie;

  const posterPath = poster_path ? basePosterUrl + poster_path : null;
  const genreList = genres ? genres.map(genre => genre.name).join(', ') : null;

  return (
    <>
      <StyledWrapper>
        <img src={posterPath} alt={title} />

        <Info>
          <h2>{title || 'Title is not available'}</h2>
          <p>User score: %</p>
          <h3>Overview</h3>
          <p>{overview ? overview : 'no information available'}</p>
          <h3>Genres</h3>
          <p>{genreList ? genreList : 'no information available'}</p>
        </Info>
      </StyledWrapper>
      <div>
        <h3>Additional information</h3>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Details;
