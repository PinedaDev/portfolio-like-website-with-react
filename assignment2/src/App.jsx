import { useState, useEffect } from 'react'
import { useCountry } from './hooks/useCountry';
import Country from './components/country/Country';

import './App.css'

function App() {
  return (
    <div className="App">
      <Country />
    </div>
  )
}

export default App
