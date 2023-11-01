import { useHttpRequest } from 'hooks/useHttpRequest';
import { useParams } from 'react-router-dom';
import { basePosterUrl, fetchCast } from 'services/api';

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
    <div>
      <ul>
        {cast &&
          cast.map(item => (
            <li key={item.id}>
              <img
                src={`${basePosterUrl}${item.profile_path}`}
                alt={item.name}
              />
              <p>{item.name}</p>

              <p>Character: {item.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
