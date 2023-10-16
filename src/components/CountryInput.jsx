import React, { useState, useEffect } from 'react'

function CountryInput({ onCountryChange }) {
    const [country, setCountry] = useState('')

    function handleChange(event) {
        setCountry(event.target.value)
        onCountryChange(event.target.value)
    }

    useEffect(() => {
        setCountry('')
    }, [onCountryChange])

    return (
        <div>
            <label>
                Country:
                <br />
                <input type="text" value={country} onChange={handleChange} />
            </label>
        </div>
    )
}

export default CountryInput;