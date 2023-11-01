import { useHttpRequest } from 'hooks/useHttpRequest';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, { isLoading, error }] = useHttpRequest(fetchReviews, movieId);

  // console.log(reviews);
  if (isLoading) {
    return <h2>Loading reviews...</h2>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
