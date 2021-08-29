import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
  div className='search'
  type='search'
  placeholder= {placeholder}
  onChange={handleChange}
  />
)
