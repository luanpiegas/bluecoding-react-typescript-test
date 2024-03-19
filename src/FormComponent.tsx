import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FormProps } from './types';

const Form: React.FC<FormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search Giphy..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
