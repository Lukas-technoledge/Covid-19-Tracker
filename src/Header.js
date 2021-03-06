// import React, { useEffect, useState } from 'react'
// import { FormControl, Select, MenuItem } from '@mui/material';
// import './Header.css'

// function Header() {

// const [countryInfo, setCountryInfo] = useState({});
// const [countries, setCountries] = useState([]);
// const [country, setCountry] = useState('worldwide');

// useEffect(() => {

//     const getCountriesData = async () => {
//       await fetch ('https://disease.sh/v3/covid-19/countries')
//       .then ((response) => response.json())
//       .then ((data) => {
//         const countries = data.map((country) => (
//           {
//             name: country.country,
//             value: country.countryInfo.iso2
//           }
//         ));
//         setCountries(countries);
//       })
//     }
//     getCountriesData();
// }, [])
//   const onCountryChange = async (event) => {
//       const countryCode = event.target.value;
//       setCountry(countryCode);

//       const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}` 
//       await fetch(url)
//       .then(response => response.json())
//       .then(data => {
//           setCountry(countryCode);
//           setCountryInfo(data);
//       });

//   };


//   return (
//     <div className='header'>
//     <h2>COVID-19 TRACKER</h2>
//     <FormControl className='header__dropdown'>
//         <Select variant='outlined' onChange={onCountryChange} value={country}>
//         <MenuItem value="worldwide">Worldwide</MenuItem>
//             {countries.map( (country => (
//               <MenuItem value = {country.value}>{country.name}</MenuItem>
//             )))}
//             { /*<MenuItem value="10">Ten</MenuItem>
//   <MenuItem value="20">Twenty</MenuItem>*/}
//         </Select>
  
//     </FormControl>
//     </div>
//   )
// }

// export default Header