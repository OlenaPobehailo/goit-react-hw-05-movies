import { useHttpRequest } from 'hooks/useHttpRequest';
import { useParams } from 'react-router-dom';
import { basePosterUrl, fetchCast } from 'services/api';
import { Actor, Character, StyledList, Wrapper } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, { isLoading, error }] = useHttpRequest(fetchCast, movieId);

  // console.log(cast);
  if (isLoading) {
    return <h2>Loading cast...</h2>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <StyledList>
      {cast &&
        cast.map(item => (
          <li key={item.id}>
            <img
              src={`${basePosterUrl}${item.profile_path}`}
              alt={item.name}
              onError={e => {
                e.target.src = 'https://placehold.co/350x500?text=Not+available';
              }}
            />
            <Wrapper>
              <Actor>{item.name}</Actor>

              <Character>Character: {item.character}</Character>
            </Wrapper>
          </li>
        ))}
    </StyledList>
  );
};

export default Cast;
