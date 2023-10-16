import React, { useState, useEffect } from 'react'

function luhnCheck(num) {
    let arr = (num + '')
        .split('')
        .reverse()
        .map((x) => parseInt(x))
    let lastDigit = arr.splice(0, 1)[0]
    let sum = arr.reduce(
        (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)),
        0
    );
    sum += lastDigit
    return sum % 10 === 0;
}

export function validateInput(input) {
    if (input.length < 13 || input.length > 16) {
        return false
    }
    if (!luhnCheck(input)) {
        return false
    }
    return true
}

function CreditCardInput({ onCardNumberChange }) {
    const [cardNumber, setCardNumber] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    function sanitizeInput(input) {
        return input.replace(/[^0-9]/g, '')
    }

    function handleChange(event) {
        let sanitizedInput = sanitizeInput(event.target.value)
        setCardNumber(sanitizedInput)
        if (validateInput(sanitizedInput)) {
            onCardNumberChange(sanitizedInput)
            setErrorMessage('') // Clear error message when input is valid
        } else {
            setErrorMessage('Invalid card number') // Set error message when input is invalid
        }
    }

    useEffect(() => {
        setCardNumber('')
    }, [onCardNumberChange])

    return (
        <div>
            <label>
                Card Number:
                <br />
                <input type="text" value={cardNumber} onChange={handleChange} />
            </label>
            {errorMessage && <p>{errorMessage}</p>} {/* Display error message if it exists */}
        </div>
    )
}

export default CreditCardInput;