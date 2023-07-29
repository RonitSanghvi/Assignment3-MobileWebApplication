import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

export default function CountryInfo ({ selectedCountry }) {
  const [countryData, setCountryData] = useState(null);
  const [capital, setCapital] = useState(null); // Capital of the Country
  const [region, setRegion] = useState(null);   // Region of the Country
  const [population, setPopulation] = useState(null); // Population of the Country

  // This fetches data for all coutries and provided information for the selected One.
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://countryapi.io/api/all?apikey=hBaMJ7D3eLH0Ivp7LcvAP6aX04H7yGumaqDdyPSW`);
      const country = Object.values(response.data).find(
        (country) => country.name.toLowerCase() === selectedCountry.toLowerCase()
      );

      if (country) {
        setCountryData(country);
        setCapital(country.capital)
        setRegion(country.region)
        setPopulation(country.population)

      } else {
        setCountryData(null); // If Country not found in the response data
      }  
      setCountryData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setCountryData(null);
    }
  };

  // Fetch data when the component mounts or when selectedCountry changes
  useEffect(() => {
    if (selectedCountry) {
      fetchData();
    }
  }, [selectedCountry, fetchData]);

  return (
    <Container>
      {countryData ? (
        <Container>
          <Typography color='white' variant='h5'>Capital: {capital}</Typography><br/>
          <Typography color='white' variant='h5'>Population: {population}</Typography><br/>
          <Typography color='white' variant='h5'>Region: {region}</Typography>
        </Container>
      ) : (
          <Typography color='white' variant='body'>Select Country From Above</Typography>
      )}
    </Container>
  );
};


