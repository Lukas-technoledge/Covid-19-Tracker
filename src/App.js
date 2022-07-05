import { Card, CardContent } from '@mui/material';
import './App.css';
// import Header from './Header';
import InfoBox from './InfoBox';
import Map from './Map';

import React, { useEffect, useState } from 'react'
import { FormControl, Select, MenuItem } from '@mui/material';



function App() {

const [countryInfo, setCountryInfo] = useState({});
const [countries, setCountries] = useState([]);
const [country, setCountry] = useState('worldwide');

useEffect(() => {
  fetch('https://disease.sh/v3/covid-19/all')
  .then(response => response.json())
  .then(data => {
    setCountryInfo(data);
  })
}, [])

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
  const onCountryChange = async (event) => {
      const countryCode = event.target.value;
      setCountry(countryCode);

      const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}` 
      await fetch(url)
      .then(response => response.json())
      .then(data => {
          setCountry(countryCode);
          setCountryInfo(data);
      });

  };


  return (
    <div className="app">
    <div className="app__left">
      

    <div className='app__header'>
    <h2>COVID-19 TRACKER</h2>
    <FormControl className='header__dropdown'>
        <Select variant='outlined' onChange={onCountryChange} value={country}>
        <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map( (country => (
              <MenuItem value = {country.value}>{country.name}</MenuItem>
            )))}
            { /*<MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>*/}
        </Select>
  
    </FormControl>
    </div>



      <div className="app__stats">
        <InfoBox title='Coronavirus Cases' cases={countryInfo.todayCases} total={countryInfo.cases}/>
        <InfoBox title='Recovered' cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
        <InfoBox title='Deaths' cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
      </div>
      <Map />
    </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;