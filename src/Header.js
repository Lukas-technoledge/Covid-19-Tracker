import React, { useEffect, useState } from 'react'
import { FormControl, Select, MenuItem } from '@mui/material';
import './Header.css'

function Header() {
  
const [countries, setCountries] = useState([]);

useEffect(() => {

    const getCountriesData = async () => {
      await fetch ('https://disease.sh/v3/covid-19/countries')
      .then ((response) => response.json())
      .then ((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ));
        setCountries(countries);
      })
    }
    getCountriesData();
}, [])

  return (
    <div className='header'>
    <h2>COVID-19 TRACKER</h2>
    <FormControl className='header__dropdown'>
        <Select variant='outlined' value="20">
            {countries.map( (country => (
              <MenuItem value = {country.value}>{country.name}</MenuItem>
            )))}
            { /*<MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>*/}
        </Select>
  
    </FormControl>
    </div>
  )
}

export default Header
