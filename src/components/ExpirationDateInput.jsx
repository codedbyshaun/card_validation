import React, { useState } from 'react'

function ExpirationDateInput({ onExpirationDateChange }) {
    const [expirationDate, setExpirationDate] = useState('')

    function handleChange(event) {
        setExpirationDate(event.target.value)
        onExpirationDateChange(event.target.value)
    }


    return (
        <div>
            <label>
                Card Expiration Date:
                <input type="month" value={expirationDate} onChange={handleChange} />
            </label>
        </div>
    )
}

export default ExpirationDateInput;