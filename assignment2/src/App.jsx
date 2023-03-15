import { useState } from 'react';
import { useCountry } from './hooks/useCountry';

import Country from './components/country/Country';
import './App.css'

function App() {

  const [inputValue, setInputValue] = useState('')
  const [error, country] = useCountry(inputValue)

  const handleInput = (e) => {
    let value = e.target.value
    if (value.length > 3) {
      setInputValue(value)
    }
  }
  return (
    <div className="App">
      <input type="text" onChange={handleInput} />
      <Country country={country} />
    </div>
  )
}

export default App
