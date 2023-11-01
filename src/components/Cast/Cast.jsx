import { useHttpRequest } from 'hooks/useHttpRequest';
import React from 'react';
import { useParams } from 'react-router-dom';
import { basePosterUrl, fetchCast } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast] = useHttpRequest(fetchCast, movieId);

  // console.log(cast);

  return (
    <div>
      Cast
      <ul>
        {cast &&
          cast.map(item => (
            <li key={cast.id}>
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
