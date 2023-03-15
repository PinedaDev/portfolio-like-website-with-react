import Country from './components/country/Country';

import './App.css'
import { useState } from 'react';
import { useCountry } from './hooks/useCountry';

function App() {

  const [inputValue, setInputValue] = useState('')
  const [error, country] = useCountry(inputValue)

  const handleInput = (e) => {
    let value = e.target.value
    if (value.length > 3) {
      setInputValue(preValue => setInputValue(value))
      console.log(inputValue)
    }
  }
  return (
    <div className="App">
      <input type="text" onChange={handleInput} />
      <Country />
    </div>
  )
}

export default App
