import React, { useState } from 'react';
import database from '../database';

const Form = ({ onSave }) => {
  const [name, setName] = useState('');
  const [sectors, setSectors] = useState([]);
  const [agree, setAgree] = useState(false);

  const handleSubmit = () => {
    // Validate
    if (!name || sectors.length === 0 || !agree) {
      alert('Please fill in all fields.');
      return;
    }

    // Save to database
    onSave({ name, sectors, agree });

    // Reset form
    setName('');
    setSectors([]);
    setAgree(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <label className="block mb-2 text-sm font-semibold">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      <label className="block mb-2 text-sm font-semibold">Sectors:</label>
      <select
        multiple
        value={sectors}
        onChange={(e) => setSectors(Array.from(e.target.selectedOptions, (option) => option.value))}
        className="w-full border p-2 rounded mb-4"
      >
        {database.sectors.map((sector) => (
          <option key={sector} value={sector}>
            {sector}
          </option>
        ))}
      </select>

      <label className="block mb-2 text-sm font-semibold">
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
          className="mr-2 leading-tight"
        />
        Agree to terms
      </label>

      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
};

export default Form;
