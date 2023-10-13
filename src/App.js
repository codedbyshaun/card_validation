import React, { useState, useEffect } from 'react'
import CardList from './components/CardList'
import BannedCountries from './components/BannedCountries'
import CardForm from './components/CardForm'
import './App.css'

function App() {
    const [cards, setCards] = useState([])
    const [bannedCountries, setBannedCountries] = useState(['Iran', 'North Korea', 'Sudan', 'Syria'])

    // Load cards from sessionStorage when component mounts
    useEffect(() => {
        const savedCards = sessionStorage.getItem('cards')
        if (savedCards) {
            setCards(JSON.parse(savedCards))
        }
    }, []);

    // Save cards to sessionStorage whenever cards state changes
    useEffect(() => {
        sessionStorage.setItem('cards', JSON.stringify(cards))
    }, [cards])

    function handleCardSubmit(card) {
      if (!bannedCountries.includes(card.country) && !cards.some(c => c.number === card.number)) {
          setCards([...cards, card])
      }
  }

    return (
      <div>
          <h1>Credit Card Validation System</h1>
          <CardForm onCardSubmit={handleCardSubmit} bannedCountries={bannedCountries} />
          <BannedCountries bannedCountries={bannedCountries} onBannedCountriesChange={setBannedCountries} />
          <CardList cards={cards} />
      </div>
  )

}

export default App;
