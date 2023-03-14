import React from 'react'

const Country = ({ country }) => {
    return (
        <div>
            {
                !country[0] ? (
                    <h1>
                        {country.status === 404 ? 'Country not found' : 'Search for something'}
                    </h1>
                ) : (
                    <h1>{country[0].name.common}</h1>
                )
            }
        </div>
    )
}

export default Country