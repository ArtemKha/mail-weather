import React from 'react';

export const selectMockComponent = ({ options, value = '', onSelect }) => {
  function handleChange(event) {
    onSelect(event.currentTarget.value);
  }
  return (
    <select data-testid="search" value={value} onChange={handleChange}>
      {options.map(({ name }) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};
