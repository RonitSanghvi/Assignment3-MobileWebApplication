import React, {useState} from 'react';
import { FormControl, Select, MenuItem, Typography } from '@mui/material';
import CountryList from './CountryList';
import CountryInfo from './CountryInfo';
import "../../App.css"
import Header from '../Header';

export default function Country() {

  const [selectedCountry, setSelectedCountry] = useState(null);
  // function runs when user selects a country or change the country
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <Header />
      <Typography color='white' variant='h4'>Select a country to view information</Typography>
      <FormControl>
          <Select
            variant='filled'
            size='small'
            placeholder='Country'
            className="Country-Select"
            onChange={handleCountryChange}
          >
            {CountryList.map((country, index) => (
              <MenuItem key={index} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
      </FormControl>

      <CountryInfo selectedCountry= {selectedCountry}/>
    </div>
  );
};

