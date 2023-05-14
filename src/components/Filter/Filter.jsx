import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

export default function Filter({ filter, handleChange }) {
  return (
    <FilterInput
      name="filter"
      type="text"
      value={filter}
      onChange={handleChange}
    ></FilterInput>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
