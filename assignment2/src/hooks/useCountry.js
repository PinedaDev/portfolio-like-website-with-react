import { useState, useEffect } from "react";

export const useCountry = countryName => {
    const [country, setCountry] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        loadCountryData(countryName);
    }, [countryName])

    const loadCountryData = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            const data = await response.json();
            setCountry(data)
        } catch (err) {
            setError(`Error fetching country data: ${err}`);
        }
    }

    return [error, country]
}