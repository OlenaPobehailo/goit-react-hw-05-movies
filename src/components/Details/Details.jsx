import { basePosterUrl } from 'services/api';
import { Info, StyledWrapper } from './Details.styled';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import calculateUserScore from 'helpers/calculateUserScore';

const Details = ({ movie }) => {
  // console.log(movie);

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
        <img src={posterPath} alt={title} />

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
      <div>
        <p>Additional information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <div>
        <Suspense fallback={<h1>Loading details...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Details;
