import { basePosterUrl } from 'services/api';
import { Info, StyledWrapper } from './Details.styled';

const Details = ({ movie }) => {
  console.log(movie);
  const {
    title,
    overview,
    genres,
    poster_path,
  } = movie;
  const posterPath = poster_path ? basePosterUrl + poster_path : null;
  const genreList = genres.map(genre => genre.name).join(', ');

  return (
    <StyledWrapper>
      <img src={posterPath} alt={title} />

      <Info>
        <h2>{title}</h2>
        <p>User score: %</p>
        <h3>Overview</h3>
        <p>{overview ? overview : 'no information available'}</p>
        <h3>Genres</h3>
        <p>{genreList ? genreList : 'no information available'}</p>
      </Info>
    </StyledWrapper>
  );
};

export default Details;
