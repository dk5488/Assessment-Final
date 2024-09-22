import React from 'react';
import Select from 'react-select';

const MultiFilter = ({ response, selectedOptions, handleFilterChange }) => {
  const options = [
    { value: 'alphabets', label: 'Alphabets' },
    { value: 'numbers', label: 'Numbers' },
    { value: 'highest_lowercase_alphabet', label: 'Highest Lowercase Alphabet' }
  ];

  return (
    <div>
      <h3>Multi Filter</h3>
      <Select
        isMulti
        name="filters"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleFilterChange}
        value={selectedOptions}
      />
    </div>
  );
};

export default MultiFilter;
