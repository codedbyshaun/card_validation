import React, { useState } from 'react'
import CreditCardInput from './CreditCardInput'
import CountryInput from './CountryInput'
import ExpirationDateInput from './ExpirationDateInput'

function CardForm({ onCardSubmit, bannedCountries }) {
    const [cardNumber, setCardNumber] = useState('')
    const [country, setCountry] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    function isExpired(date) {
        const today = new Date()
        const month = today.getMonth() + 1 // getMonth() returns month index starting from 0
        const year = today.getFullYear()
        const [expYear, expMonth] = date.split('-').map(Number)
        return expYear < year || (expYear === year && expMonth < month)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (bannedCountries.includes(country)) {
            setErrorMessage('This country is banned')
            return;
        }
        if (isExpired(expirationDate)) { 
            setErrorMessage('This card is expired')
            return;
        }
        if (cardNumber && country && expirationDate) {
            onCardSubmit({ number: cardNumber, country: country, expirationDate: expirationDate })
            setCardNumber('')
            setCountry('')
            setExpirationDate('')
            setErrorMessage('') 
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CreditCardInput onCardNumberChange={setCardNumber} />
            <CountryInput onCountryChange={setCountry} />
            <ExpirationDateInput onExpirationDateChange={setExpirationDate} />
            <button type="submit">Submit</button>
            {errorMessage && <p>{errorMessage}</p>} {/* Display the error message if it exists */}
        </form>
    );
}

export default CardForm;