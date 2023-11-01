import MovieList from 'components/MovieList';
import { useHttpRequest } from 'hooks/useHttpRequest';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';

const Movies = () => {
  const [searchStr, setSearchStr] = useState('');

  const [searchParams, setSearchParams] = useSearchParams({
    searchStr: '',
  });
  const searchQuery = searchParams.get('searchStr');
  const [searchMovies, { isLoading, error }] = useHttpRequest(
    fetchMoviesByQuery,
    searchQuery
  );

  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleInputChange = e => {
    setSearchStr(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ searchStr });
    setSearchStr('');
    setSearchPerformed(true);
  };

  // console.log('searchMovies', searchMovies);

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={searchStr} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>

      {isLoading && <h1>Loading...</h1>}
      {error && <p>Error: {error}</p>}

      {searchPerformed &&
      !isLoading &&
      !error &&
      searchMovies &&
      searchMovies.length === 0 ? (
        <h1>No movies found</h1>
      ) : (
        searchMovies && <MovieList movies={searchMovies} />
      )}
    </div>
  );
};

export default Movies;
