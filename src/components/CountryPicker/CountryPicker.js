import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css'
import { NativeSelect, FormControl } from '@material-ui/core';

const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await fetchCountries();
            setCountries(data);
            console.log(countries);
        };
        fetchApi();
    }, []);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;