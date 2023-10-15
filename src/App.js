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
      <div className='main'>
          
          <div className='input-container'>

          <div className='hero'>
          <h1>Card-o-matic Validation Panel</h1>
          <CardForm onCardSubmit={handleCardSubmit} bannedCountries={bannedCountries} />
          

          <div className='banned-countries'>
          <BannedCountries bannedCountries={bannedCountries} onBannedCountriesChange={setBannedCountries} />
          </div>
          </div>

          </div>

          <div className='valid-cards'>
          <CardList cards={cards} />
          </div>
      </div>
  )

}

export default App;
