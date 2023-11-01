import { useHttpRequest } from 'hooks/useHttpRequest';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews] = useHttpRequest(fetchReviews, movieId);

  // console.log(reviews);

  return (
    <ul>
      {reviews &&
        reviews.map(item => (
          <li key={item.id}>
            <p>{`Author: ${item.author}`}</p>
            <p>{item.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
