import React from 'react'
import { FormControl, Select, MenuItem } from '@mui/material';
import './Header.css'

function Header() {
  return (
    <div className='header'>
    <h2>COVID-19 TRACKER</h2>
    <FormControl className='header__dropdown'>
        <Select variant='outlined' value="20" select>
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
        </Select>
  
    </FormControl>
    </div>
  )
}

export default Header
