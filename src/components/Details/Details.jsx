import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { basePosterUrl } from 'services/api';
import calculateUserScore from 'helpers/calculateUserScore';
import { Additional, Info, StyledWrapper } from './Details.styled';

const Details = ({ movie }) => {
  const {
    title,
    overview,
    genres,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  } = movie;

  const posterPath = poster_path ? basePosterUrl + poster_path : null;
  const genreList = genres ? genres.map(genre => genre.name).join(', ') : null;
  const year = new Date(release_date).getFullYear();

  return (
    <>
      <StyledWrapper>
        <img
          src={posterPath || 'https://placehold.co/350x500?text=Not+available'}
          alt={title}
        />

        <Info>
          <h2>
            {title || 'Title is not available'} ({year})
          </h2>
          <p>User score: {calculateUserScore(vote_average, vote_count)} %</p>
          <h3>Overview</h3>
          <p>{overview ? overview : 'no information available'}</p>
          <h3>Genres</h3>
          <p>{genreList ? genreList : 'no information available'}</p>
        </Info>
      </StyledWrapper>
      <Additional>
        <p>Additional information:</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </Additional>
      <div>
        <Suspense fallback={<h2>Loading additional information...</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

Details.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }),
};

export default Details;
