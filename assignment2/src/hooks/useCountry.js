import { useState, useEffect } from "react";

export const useCountry = countryName => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        loadCountryData(countryName);
    }, [])

    const loadCountryData = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        const data = await response.json();
        setCountry(data)
    }

    return { country }
}