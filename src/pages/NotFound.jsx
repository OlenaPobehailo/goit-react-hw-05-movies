import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex-column-container">
      <h1>Page not found</h1>
      <h2>
        You can go to 
        <Link to='/'> Home page</Link>
      </h2>
    </div>
  );
};

export default NotFound;
