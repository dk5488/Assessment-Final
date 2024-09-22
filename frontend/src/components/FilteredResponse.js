import React from 'react';

const FilteredResponse = ({ response, selectedOptions }) => {
  const renderFilteredResponse = () => {
    return selectedOptions.map((option) => (
      <div key={option.value}>
        <h4>{option.label}:</h4>
        <p>{response[option.value]?.join(', ') || 'No data available'}</p>
      </div>
    ));
  };

  return (
    <div>
      <h3>Filtered Response</h3>
      {renderFilteredResponse()}
    </div>
  );
};

export default FilteredResponse;
