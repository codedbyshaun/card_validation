import React, { useState } from 'react'

function CountryInput({ onCountryChange }) {
    const [country, setCountry] = useState('')

    function handleChange(event) {
        setCountry(event.target.value)
        onCountryChange(event.target.value)
    }

    return (
        <div>
            <label>
                Country:
                <input type="text" value={country} onChange={handleChange} />
            </label>
        </div>
    )
}

export default CountryInput;