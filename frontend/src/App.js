import React, { useState } from 'react';
import InputForm from './components/InputFrom'; // Fixed typo from InputFrom to InputForm
import MultiFilter from './components/MultiFilter';
import FilteredResponse from './components/FilteredResponse';
import axios from 'axios';

const App = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState(false); // New state variable

  const handleSubmit = async () => {
    setIsSubmitted(true);
    try {
      const jsonData = JSON.parse(jsonInput.trim()); // Trim whitespace
      const res = await axios.post('hhttps://assessment-final-backend1234.onrender.com', jsonData);
      console.log(res); // Update to your backend URL
      setResponse(res.data);
      setSelectedOptions([]); // Clear previous selection after new submission
      setFiltersApplied(false); // Reset filters applied state
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFilterChange = (selected) => {
    setSelectedOptions(selected);
    setFiltersApplied(selected.length > 0); // Update filters applied state based on selection
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <InputForm
        jsonInput={jsonInput}
        setJsonInput={setJsonInput}
        handleSubmit={handleSubmit}
      />
      <MultiFilter
        response={response}
        selectedOptions={selectedOptions}
        handleFilterChange={handleFilterChange}
      />
      {response && isSubmitted && filtersApplied && (
        <FilteredResponse response={response} selectedOptions={selectedOptions} />
      )}
    </div>
  );
};

export default App;
