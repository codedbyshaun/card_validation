import React, { useState } from 'react'

function BannedCountries({ bannedCountries, onBannedCountriesChange }) { 
    const [newCountry, setNewCountry] = useState('')

    function handleAdd() {
        if (newCountry && !bannedCountries.includes(newCountry)) {
            onBannedCountriesChange([...bannedCountries, newCountry])
            setNewCountry('')
        }
    }

    function handleRemove(country) {
        onBannedCountriesChange(bannedCountries.filter(c => c !== country))
    }

    return (
        <div>
            <h2>Banned Countries</h2>
            <input type="text" value={newCountry} onChange={e => setNewCountry(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {bannedCountries.map(country => (
                    <li key={country}>
                        {country}
                        <button onClick={() => handleRemove(country)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BannedCountries;