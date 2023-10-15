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
            
            <ul>
                {bannedCountries.map(country => (
                    <li key={country}>
                        {country}
                        <button className='remove-button' onClick={() => handleRemove(country)}>x</button>
                    </li>
                ))}
            </ul>
            <input type="text" value={newCountry} onChange={e => setNewCountry(e.target.value)} />
            <button className='add-button' onClick={handleAdd}>Add Country</button>
        </div>
    )
}

export default BannedCountries;