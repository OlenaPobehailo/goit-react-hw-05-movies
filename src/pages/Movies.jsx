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
  const [searchMovies] = useHttpRequest(fetchMoviesByQuery, searchQuery);

  const handleInputChange = e => {
    setSearchStr(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ searchStr });
    setSearchStr('');
  };

  // console.log('searchMovies', searchMovies);

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={searchStr} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>

      {searchMovies ? (
        <MovieList movies={searchMovies} />
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default Movies;
