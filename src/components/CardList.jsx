import React from 'react'

function CardList({ cards }) {

    // function maskCardNumber(number) {
    //     const len = number.length;
    //     if (len >= 8) {
    //         return number.slice(0, 4) + '*'.repeat(len - 8) + number.slice(len - 4);
    //     } else {
    //         return number;
    //     }
    // }

    return (
        <div>
            <h2>Valid Cards</h2>
            <ul>
                {cards.map((card) => (
                    <li key={card.number}>
                        Card Number: {(card.number)}
                        <br />
                        Country: {card.country}
                        <br />
                        Expiration Date: {card.expirationDate}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CardList;