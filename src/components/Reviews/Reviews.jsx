import { useHttpRequest } from 'hooks/useHttpRequest';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import { Author, Content, StyledList } from './Reviews.styled';

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

  if (!reviews || reviews.length === 0) {
    return <h2>No reviews available.</h2>;
  }

  return (
    <StyledList>
      {reviews &&
        reviews.map(item => (
          <li key={item.id}>
            <Author>{`Author: ${item.author}`}</Author>
            <Content>{item.content}</Content>
          </li>
        ))}
    </StyledList>
  );
};

export default Reviews;
