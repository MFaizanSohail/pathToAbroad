import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import countryList from 'react-select-country-list';

function CountrySelect() {
  const [value, setValue] = useState('');
  const options = countryList().getData();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="country-label">Country</InputLabel>
      <Select
        labelId="country-label"
        id="country"
        value={value}
        onChange={handleChange}
        label="Country"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CountrySelect;
