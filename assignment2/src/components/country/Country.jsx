import React from 'react'
import { withCountry } from '../HoC/withCountry'

const Country = ({ country }) => {
    return (
        <>
            {country && country.map(countryDetails => (
                <div key={countryDetails.name}>
                    {countryDetails.name.common}
                </div>
            ))}
        </>
    )
}

export default withCountry(Country)