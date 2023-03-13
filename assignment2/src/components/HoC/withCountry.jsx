import { useState, useEffect } from 'react'

export function withCountry(Component) {
    return (props) => {
        const [country, setCountry] = useState([])

        useEffect(() => {
            const loadCountryData = async (name) => {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
                const data = await response.json();
                setCountry(data)
            }
            loadCountryData('suomi');
        }, [])



        return <Component {...props} country={country} />
    }
}