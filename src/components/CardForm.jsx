import React, { useState } from 'react'
import CreditCardInput from './CreditCardInput'
import CountryInput from './CountryInput'

function CardForm({ onCardSubmit, bannedCountries }) {
    const [cardNumber, setCardNumber] = useState('')
    const [country, setCountry] = useState('')
    const [errorMessage, setErrorMessage ] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        if (bannedCountries.includes(country)) {
            setErrorMessage('This country is banned')
            return
        }
        if (cardNumber && country) {
            onCardSubmit({ number: cardNumber, country: country })
            setCardNumber('')
            setCountry('')
            setErrorMessage('')
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <CreditCardInput onCardNumberChange={setCardNumber} />
            <CountryInput onCountryChange={setCountry} />
            <button type="submit">Submit</button>
            {errorMessage && <p>{errorMessage}</p>} {/* display error message if it exists */}
        </form>
    )
}

export default CardForm;