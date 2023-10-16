import React, { useState } from 'react'
import CreditCardInput from './CreditCardInput'
import CountryInput from './CountryInput'
import ExpirationDateInput from './ExpirationDateInput'

function CardForm({ onCardSubmit, bannedCountries }) {
    const [cardNumber, setCardNumber] = useState('')
    const [country, setCountry] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [key, setKey] = useState(Date.now())

    function isExpired(date) {
        const today = new Date()
        const expiryDate = new Date(date)

        // Set hours, minutes, seconds and milliseconds to 0 for accurate comparison
        today.setHours(0, 0, 0, 0);
        expiryDate.setHours(0, 0, 0, 0);

        return expiryDate < today;
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
            setKey(Date.now())
        } else {
            setErrorMessage('Please fill in all the fields')
        }
    }

    return (
        <form onSubmit={handleSubmit} key={key}>
            <CreditCardInput onCardNumberChange={setCardNumber} />
            <CountryInput onCountryChange={setCountry} />
            <ExpirationDateInput onExpirationDateChange={setExpirationDate} />
            <button className='card-info-button' type="submit">Submit</button>
            {errorMessage && <p>{errorMessage}</p>} {/* Display the error message if it exists */}
        </form>
    );
}

export default CardForm;