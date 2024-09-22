import React from 'react';

const InputForm = ({ jsonInput, setJsonInput, handleSubmit }) => {
  return (
    <div>
      <h1>API Input</h1>
      <textarea
        rows="3"
        style={{ width: '100%', padding: '10px', marginBottom: '10px', fontSize: '16px' }}
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder="Enter JSON data"
      />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          width: '100%',
          marginBottom: '20px'
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default InputForm;
