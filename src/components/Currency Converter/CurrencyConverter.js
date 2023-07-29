import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Typography } from "@mui/material";
import Header from "../Header";

const CurrencyConverter = () => {
  const [conversionRates, setConversionRates] = useState({});
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("CAD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState("");

  useEffect(() => {
    // Fetch data from the provided URL and set conversion rates
    axios
      .get("https://api.exchangeratesapi.io/v1/latest?access_key=6e8202ba3b24f80931a9b44ba11a4a77")
      .then((response) => {
        setConversionRates(response.data.rates);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // The API has the currency conversion for the base EURO. so this function will get the rates between any country.
  const handleConvert = () => {
    if (amount && conversionRates[fromCurrency] && conversionRates[toCurrency]) {
      const convertedAmount = (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
      setResult(convertedAmount.toFixed(2));
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <div>
      <Header />
      <Typography variant="h4" color='white' gutterBottom> Currency Converter</Typography>
      <div className="Horizontal-line" />

      <div style={{marginTop: 50}}>
      <FormControl>
        <InputLabel className="currency-lable">From Currency</InputLabel>
        <Select className="currency-select" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {Object.keys(conversionRates).map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl >
        <InputLabel className="currency-lable">To Currency</InputLabel>
        <Select className="currency-select" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {Object.keys(conversionRates).map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Amount"
        type="number"
        value={amount}
        className="currency-textfield"
        onChange={(e) => setAmount(e.target.value)}
      />

      <Button size="large" variant="contained" color="primary" onClick={handleConvert}>
        Convert
      </Button>

      <Typography color='white' sx={{marginTop: 2}}>Converted Amount: {result}</Typography>
      </div>
    </div>
  );
};

export default CurrencyConverter;