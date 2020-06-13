import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css'
import { NativeSelect, FormControl } from '@material-ui/core';

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await fetchCountries();
            setCountries(data);
            console.log(countries);
        }; 
        fetchApi();
    }, []);

    const onChange = (event) => {
        alert(event.target.value)
    }

    return (
        // countries.length ?
        //     (
        //         <select onChange={onChange}>
        //             {countries.map(country => (
        //                 <option key={country.name}>{country.name}</option>
        //             ))}
        //         </select>
        //     )
        //     : null
        // <FormControl className={styles.formcontrol}>
        //     <NativeSelect>
        //         <option value="global">global</option> 

        //         {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        //     </NativeSelect>
        // </FormControl>

        <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
    )
}

export default CountryPicker;