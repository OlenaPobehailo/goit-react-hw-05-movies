import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [searchStr, setSearchStr] = useState('');

  const handleInputChange = e => {
    setSearchStr(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(searchStr);
    setSearchStr('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={searchStr} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
