import { useState, useEffect } from 'react'
import { useCountry } from './hooks/useCountry';

import './App.css'

function App() {
  const [input, setInput] = useState([]);
  const [error, country] = useCountry(input);
  const handler = e => setInput(e.target.value)

  useEffect(() => {
    country !== undefined ? console.log(country[0]) : console.log(undefined)
  }, [input])

  return (
    <div className="App">
      <form>
        <input type="text" value={input} onChange={e => handler(e)} />
      </form>
    </div>
  )
}

export default App
